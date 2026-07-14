import { getArguments } from "./cli.js";
import { readLogFile } from "./reader.js";
import { parseText } from "./parser.js";

main();

function main() {
    const args = getArguments();

    if (args.length === 0) {
        console.log("Usage:");
        console.log("pnpm dev <log file>");
        process.exit(1);
    }

    console.log("Industrial Log Analyzer");
    console.log()

    const text = readLogFile(args[0]);
    const entries = parseText(text);

    console.log(`Loaded ${entries.length} entries`);
}