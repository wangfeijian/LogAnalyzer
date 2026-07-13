import { LogEntry } from "./types.js";

export function parseLine(line: string): LogEntry {
    const parts = line.split(/\s+/);

    if (parts.length < 4) {
        throw new Error(`Invalid log line: ${line}`);
    }

    const entry: LogEntry = {
        time: parts[0] + " " + parts[1],
        level: parts[2],
        message: parts.slice(3).join(" ")
    }
    return entry;
}