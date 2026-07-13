import * as fs from "node:fs";
import { getArguments } from "./cli.js";
import { parseLine } from "./parser.js";

const args = getArguments();

if (args.length === 0) {
    console.log("Usage:");
    console.log("pnpm dev <log file>");
    process.exit(1);
}

console.log(args);

console.log("Industrial Log Analyzer");
console.log("")

const text = fs.readFileSync(args[0], "utf-8");

const lines = text.split("\n");

for(const line of lines){
    console.log("========== Raw ==========");
    console.log(line);
    console.log("");
    console.log("========== Parsed ==========");
    const parts = parseLine(line);
    console.log(parts);
}