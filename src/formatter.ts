import { StatisticsResult } from "./types.js";

export function formatStatistics(result: StatisticsResult) : string {
    const lines: string[] = [];

    lines.push(`Total Entries : ${result.total}`);
    lines.push("");
    
    for(const [level, count] of result.levels){
        lines.push(`${level} : ${count}`);
    }
    
    const errorCount = result.levels.get("ERROR") ?? 0;
    const rate = result.total === 0 ? 0 : errorCount / result.total;
    
    lines.push("");
    lines.push(`Error Rate: ${(rate * 100).toFixed(2)}%`);
    return lines.join("\n");
}