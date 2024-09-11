// Copyright © 2024 Kars (github.com/Kars1996)
//
// Not to be shared, replicated or used without prior consent.
// Contact Kars for any enquiries.

import type { EndingProp } from "./types";

export const ignorePaths: string[] = [
    ".vscode",
    ".git",
    "node_modules",
    ".VSCodeCounter",
];

export const validEndings: EndingProp[] = [
    { suffix: ".js", comment: "//" },
    { suffix: ".ts", comment: "//" },
    { suffix: ".tsx", comment: "//" },
    { suffix: ".jsx", comment: "//" },
    { suffix: ".py", comment: "#" },
    { suffix: ".php", comment: "//" },
    { suffix: ".java", comment: "//" },
    { suffix: ".cs", comment: "//" },
    { suffix: ".rb", comment: "#" },
    { suffix: ".swift", comment: "//" },
    { suffix: ".go", comment: "//" },
    { suffix: ".rs", comment: "//" },
    { suffix: ".rs.in", comment: "//" },
    { suffix: ".lua", comment: "--" },
    { suffix: ".html", comment: "<!--", ending: "-->" },
];

export const useStuff: string[] = ['"use server"', '"use client"'];
