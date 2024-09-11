#!/usr/bin/env node

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

export const useStuff: string[] = [
    '"use server"',
    '"use client"',
    '"use strict"',
];
