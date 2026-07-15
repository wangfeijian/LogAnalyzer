import { LogEntry, StatisticsResult } from "./types.js";

export function calculateStatistics(entries: LogEntry[]) : StatisticsResult {
    const statisticsMap = new Map<string, number>();
    let number : number = 0;

    for(const logEntry of entries) {
        number = number + 1;
        if(statisticsMap.has(logEntry.level)) {
            statisticsMap.set(logEntry.level, statisticsMap.get(logEntry.level)! + 1);
        } else {
            statisticsMap.set(logEntry.level, 1);
        }
    }

    return {
        total : number,
        levels : statisticsMap
    }
}