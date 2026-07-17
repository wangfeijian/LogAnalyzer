import { LogEntry } from "./types.js";

export function filterByLevel(entries: LogEntry[], level: string): LogEntry[] {
    return entries.filter(e => e.level === level);
}