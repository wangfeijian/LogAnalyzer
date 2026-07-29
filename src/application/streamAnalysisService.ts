import { analyzeStream } from "../analysis/streamAnalyzer.js";
import { readLines } from "../parser/reader.js";
import { parseStream } from "../parser/streamParser.js";

export async function runStreamAnalysis(file:string) {
    const lines = readLines(file);
    
    const entries = parseStream(lines);

    const alarms = analyzeStream(entries);

    for await(const alarm of alarms){
        console.log(alarm);
    }
}