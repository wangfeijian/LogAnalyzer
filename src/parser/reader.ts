import fs from "fs";
import readline from "readline";

export async function readLogFile(path: string): Promise<string> {  
    const text = await fs.readFileSync(path, "utf-8");
    return text;
}

export async function* readLines(path :string):AsyncGenerator<string>{
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({input:fileStream, crlfDelay:Infinity});

    for await(const line of rl){
        yield line;
    }
}