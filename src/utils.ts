// Copyright © 2024 Kars (github.com/Kars1996)
//
// Not to be shared, replicated or used without prior consent.
// Contact Kars for any enquiries.

import fs from "fs";
import path from "path";
import { validEndings, ignorePaths, useStuff } from "./data";
import { cyan, red } from "kolorist";

export function getValidFiles(dir: string): string[] {
    const files: string[] = [];
    const gitignorePaths = parseGitignore(dir);
    const allIgnorePaths = [...ignorePaths, ...gitignorePaths];

    function readDirectory(currentPath: string) {
        const items = fs.readdirSync(currentPath);
        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);

            if (allIgnorePaths.some((ignored) => fullPath.includes(ignored)))
                continue;

            if (stat.isDirectory()) {
                readDirectory(fullPath);
            } else {
                const ext = path.extname(fullPath);
                if (validEndings.some((ending) => ending.suffix === ext)) {
                    files.push(fullPath);
                }
            }
        }
    }

    readDirectory(dir);
    return files;
}

export function addCommentToFile(
    file: string,
    name: string,
    github: string,
    message: string,
    force: boolean = false
): boolean {
    const { comment: commentSyntax, ending } = validEndings.find((ending) =>
        file.endsWith(ending.suffix)
    ) || { comment: "//" };

    const currentYear = new Date().getFullYear();
    const copyrightMessage = `${commentSyntax} Copyright © ${currentYear} ${name} (github.com/${github})\n${commentSyntax}\n${commentSyntax} ${message}\n${commentSyntax} Contact ${name} for any enquiries.\n\n\n${
        ending ? ending + "\n" : ""
    }`;

    const fileContent = fs.readFileSync(file, "utf-8");

    if (fileContent.includes(`Copyright © ${currentYear} ${name}`) && !force) {
        return false;
    }

    const flaggedDirective = useStuff.find((directive) =>
        fileContent.startsWith(directive)
    );

    if (flaggedDirective) {
        if (!force) {
            return false;
        } else {
            const updatedContent = fileContent.replace(
                flaggedDirective,
                `${flaggedDirective}\n${copyrightMessage}`
            );
            fs.writeFileSync(file, updatedContent);
            return true;
        }
    }

    fs.writeFileSync(file, copyrightMessage + fileContent);
    return true;
}

export async function showLoading(
    message: string,
    duration: number = 2000
): Promise<void> {
    process.stdout.write(cyan(`${message}...`));
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Done!");
            resolve();
        }, duration);
    });
}

export function parseGitignore(dir: string): string[] {
    const gitignorePath = path.join(dir, ".gitignore");
    if (!fs.existsSync(gitignorePath)) return [];

    const gitignoreContent = fs.readFileSync(gitignorePath, "utf-8");
    return gitignoreContent
        .split("\n")
        .filter((line) => line.trim() && !line.startsWith("#"))
        .map((line) => line.trim());
}
