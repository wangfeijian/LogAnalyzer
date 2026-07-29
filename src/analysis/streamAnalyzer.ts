import { AlarmInfo, LogEntry } from "../model/types.js";
import { analyze } from "./analyzer.js";

export async function* analyzeStream(entries: AsyncIterable<LogEntry>):AsyncGenerator<AlarmInfo>{
    for await(const entry of entries){
        yield analyze([entry])[0];
    }
}