import * as fs from "node:fs";
import { LogEntry } from "./types.js";
import { parseLine } from "./parser.js";

export function readLogFile(path: string): string{  
    return fs.readFileSync(path, "utf-8");;
}