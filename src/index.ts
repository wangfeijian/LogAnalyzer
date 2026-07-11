import * as fs from "node:fs";

console.log("Industrial Log Analyzer");
console.log("")

const text = fs.readFileSync("data/sample.log", "utf-8");

console.log(text);