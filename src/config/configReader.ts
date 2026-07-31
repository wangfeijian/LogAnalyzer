import fs from "fs";

export function loadConfig(path:string):string{
    return fs.readFileSync(path, "utf-8");
}