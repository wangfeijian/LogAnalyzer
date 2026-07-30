import { CliOptions } from "../model/types.js";
import { runAnalysis } from "./analyzerService.js";
import { runStreamAnalysis } from "./streamAnalysisService.js";

export async function run(option:CliOptions) {
    if(option.stream){
        return runStreamAnalysis(option.file);
    }

    return runAnalysis(option);
}