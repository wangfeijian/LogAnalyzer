import { getArguments } from "./cli.js";
import { readLogFile } from "./reader.js";
import { parseText } from "./parser.js";
import { calculateStatistics } from "./statistics.js"
import { formatStatistics } from "./formatter.js";
import { filterByLevel } from "./filter.js";
import { analyze } from "./analyzer.js";

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

        console.log(analyze(entries));
        console.log(`Loaded ${entries.length} entries`);

        const statisticsResult = calculateStatistics(entries);
        console.log(formatStatistics(statisticsResult));
    } catch (err) {

        console.error(err);

        process.exit(1);
    }
}