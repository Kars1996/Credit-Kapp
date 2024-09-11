#!/usr/bin/env node

import UI from "./UI";
import { cyan, green, red } from "kolorist";
import * as Data from "./data";
import { getValidFiles, addCommentToFile, showLoading } from "./utils";
import path from "path";

async function main() {
    UI.header();
    const name = await UI.text("What is your name?", "Kars");
    const userGithub = await UI.text("What is your github name?", "Kars1996");

    const message = (await UI.bool(
        "Would you like to set your copyright message?"
    ))
        ? await UI.text("Enter your copyright message")
        : "Not to be shared, replicated or used without prior consent.";

    const userPath = await UI.text("What is the file path to work in?", ".");
    const resolvedPath = path.resolve(userPath);

    const forceFlag = process.argv.includes("--force");

    const files = getValidFiles(resolvedPath);
    let finalLen: number;
    finalLen = 0;
    if (
        await UI.bool(
            `Are you sure you want to add the message to ${cyan(
                files.length
            )} files?`
        )
    ) {
        UI.print("Processing Files...");

        files.forEach((file) => {
            if (addCommentToFile(file, name, userGithub, message, forceFlag)) {
                finalLen += 1;
            }
        });
    }

    UI.end(finalLen);
}

main().catch((err) => console.error(red(`Error: ${err.message}`)));
