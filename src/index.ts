import { getArguments } from "./cli/cli.js";
import { runAnalysis } from "./application/analyzerService.js";

main()
.catch(err => {
    console.error(err);
})

async function main() {
    try {
        const option = getArguments();

        console.log("Industrial Log Analyzer");
        console.log()

        const result = await runAnalysis(option);

        console.log(result.topAlarms);
    } catch (err) {

        console.error(err);

        process.exit(1);
    }
}