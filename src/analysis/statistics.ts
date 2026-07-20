import { LogEntry, StatisticsResult } from "../model/types.js";

export function calculateStatistics(entries: LogEntry[]) : StatisticsResult {
    const statisticsMap = new Map<string, number>();
    let total : number = 0;

    for(const logEntry of entries) {
        total = total + 1;
        const count = statisticsMap.get(logEntry.level) ?? 0;
        statisticsMap.set(logEntry.level, count + 1);
    }

    return {
        total : total,
        levels : statisticsMap
    }
}