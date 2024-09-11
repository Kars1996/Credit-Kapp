#!/usr/bin/env node

import { cyan, green, white, bold } from "kolorist";
import prompts from "prompts";

export default class UI {
    private static readonly github = cyan("Kars1996");
    private static readonly website = cyan("kars.bio");

    public static header(): void {
        console.log(
            `${cyan("o")}   --------------------------------------------${cyan(
                "+"
            )}`
        );
        console.log(`|                                               |`);
        console.log(
            `|   Welcome to ${cyan("KAPP")}. Let's credit your project! |`
        );
        console.log(`|                                               |`);
        console.log(
            `${cyan("o")}   --------------------------------------------${cyan(
                "+"
            )}`
        );
        this.bleh();
    }

    private static bleh(): void {
        console.log(white(`|`));
    }

    public static async bool(prompt: string): Promise<boolean> {
        const response = await prompts({
            type: "toggle",
            name: "value",
            message: `  ${prompt}`,
            initial: false,
            active: "yes",
            inactive: "no",
        });
        this.bleh();

        return response.value;
    }

    public static async text(
        prompt: string,
        defaultValue?: string
    ): Promise<string> {
        const response = await prompts({
            type: "text",
            name: "value",
            message: `  ${prompt}`,
            initial: defaultValue,
            validate: (value: string) =>
                value ? true : `Please enter a valid value.`,
        });
        this.bleh();

        return response.value;
    }

    public static print(prompt: string) {
        console.log(`${cyan("o")}   ${white(bold(prompt))}`);
        this.bleh();
    }

    public static end(fileLen: number): void {
        if (fileLen === 0) {
            this.print(
                "No files changed, they were already credited (Add flag --force to add it anyway)!"
            );
        } else {
            console.log(
                green(
                    `${cyan("o")}   ${bold(
                        `Successfully added credits to ${cyan(
                            fileLen.toLocaleString()
                        )} files!`
                    )}`
                )
            );
        }
        this.bleh();

        console.log(`${cyan("o")}   Links -------------${cyan("+")}`);
        console.log(`|   - @${this.github}        |`);
        console.log(`|   - ${this.website}         |`);
        console.log(`${cyan("+")}  --------------------${cyan("+")}`);
    }
}
