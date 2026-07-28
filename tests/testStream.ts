import {readLines} from "../src/parser/reader.js"

for await(
    const line of readLines("./data/sample.log")
){
    console.log(line);
}