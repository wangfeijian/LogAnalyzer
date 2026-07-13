export function parseLine(line: string){
    const items = line.split(/\s+/);
    return {
        time: items[0] + " " + items[1],
        level: items[2],
        message: items.slice(3).join(" ")
    }
}