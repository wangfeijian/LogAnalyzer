import { LogEntry } from "../model/types.js";
import { parseLine } from "./parser.js";

export async function* parseStream(lines: AsyncIterable<string>): AsyncGenerator<LogEntry> {
    for await(const line of lines){
        yield parseLine(line);
    }
}