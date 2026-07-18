import { AlarmInfo, LogEntry } from "./types.js";

export function analyze(entries: LogEntry[]): AlarmInfo[] {
    return entries.map(parseAlarm);
}

function parseAlarm(entry: LogEntry): AlarmInfo {
    const message = entry.message.trim();

    if (!message) {
        return {
            device: "Unknown",
            action: "Unknown error"
        };
    }

    const words = message.split(/\s+/);

    const device = words[0] ?? "Unknown";
    const action = words.slice(1).join(" ") || "Unknown error";
    return {
        device,
        action
    };
}