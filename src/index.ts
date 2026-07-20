import { getArguments } from "./cli/cli.js";
import { readLogFile } from "./parser/reader.js";
import { parseText } from "./parser/parser.js";
import { calculateStatistics } from "./analysis/statistics.js"
import { formatStatistics } from "./formatter/formatter.js";
import { filterByLevel } from "./parser/filter.js";
import { analyze } from "./analysis/analyzer.js";
import { getTopAlarms } from "./analysis/analyzerStatistics.js";

main();

function main() {
    try {
        const option = getArguments();

        console.log("Industrial Log Analyzer");
        console.log()

        const text = readLogFile(option.file);
        let entries = parseText(text);

        if (option.level) {
            entries = filterByLevel(entries, option.level);
        }

        const alarms = analyze(entries);
        console.log(alarms);
        console.log(`Loaded ${entries.length} entries`);

        const topAlarms = getTopAlarms(alarms);
        console.log(topAlarms);

        const statisticsResult = calculateStatistics(entries);
        console.log(formatStatistics(statisticsResult));
    } catch (err) {

        console.error(err);

        process.exit(1);
    }
}