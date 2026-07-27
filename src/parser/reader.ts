import * as fs from "node:fs";

export async function readLogFile(path: string): Promise<string> {  
    const text = await fs.readFileSync(path, "utf-8");
    
    return text;
}