import { CliOptions } from "./types.js";

export function getArguments() : CliOptions {
    const args = process.argv.slice(2);

    const file = args[0] ?? "";
    const levelIndex = args.indexOf("--level");

    let level: string | undefined;

    if (levelIndex !== -1) {

        // 后面没有参数
        if (levelIndex + 1 >= args.length) {
            throw new Error("Missing value for --level");
        }

        const value = args[levelIndex + 1];

        // 后面跟的是另一个选项
        if (value.startsWith("--")) {
            throw new Error("Missing value for --level");
        }

        level = value;
    }

    return {
        file : file,
        level : level
    }
}