import { StatisticsResult } from "./types.js";

export function formatStatistics(result: StatisticsResult) : string {
    const lines: string[] = [];

    lines.push(`Total Entries : ${result.total}`);
    lines.push("");

    for(const [level, count] of result.levels){
        lines.push(`${level} : ${count}`);
    }

    return lines.join("\n");
}