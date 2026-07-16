import { LogEntry } from "./types.js";

function parseLine(line: string): LogEntry {
    const parts = line.split(/\s+/);

    if (parts.length < 4) {
        throw new Error(`Invalid log line: ${line}`);
    }

    const entry: LogEntry = {
        time: `${parts[0]} ${parts[1]}`,
        level: parts[2],
        message: parts.slice(3).join(" ")
    }
    return entry;
}

export function parseText(text: string) : LogEntry[] {
     const entries: LogEntry[] = [];

     const lines = text.split(/\r?\n/);

    for(const line of lines){
        try {

            const entry = parseLine(line);
            entries.push(entry);
        }
        catch (error) {
            if (error instanceof Error) {
                console.warn(error.message);
            }
        }
    }

    return entries;
}