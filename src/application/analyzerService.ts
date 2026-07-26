import { analyze } from "../analysis/analyzer.js";
import { getTopAlarms } from "../analysis/analyzerStatistics.js";
import { calculateStatistics } from "../analysis/statistics.js";
import { CliOptions } from "../model/types.js";
import { filterByLevel } from "../parser/filter.js";
import { parseText } from "../parser/parser.js";
import { readLogFile } from "../parser/reader.js";

export function runAnalysis(option: CliOptions) {
    const text = readLogFile(option.file);

    let entries = parseText(text);

    if (option.level) {
        entries = filterByLevel(entries, option.level);
    }

    const alarms = analyze(entries);

    const topAlarms = getTopAlarms(alarms);
    
    const statisticsResult = calculateStatistics(entries);

    return {
        entries,
        alarms,
        statisticsResult,
        topAlarms
    }
}