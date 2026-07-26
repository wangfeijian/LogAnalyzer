import { getArguments } from "./cli/cli.js";
import { runAnalysis } from "./application/analyzerService.js";

main();

function main() {
    try {
        const option = getArguments();

        console.log("Industrial Log Analyzer");
        console.log()

        const result = runAnalysis(option);

        console.log(result.topAlarms);
    } catch (err) {

        console.error(err);

        process.exit(1);
    }
}