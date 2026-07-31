import {loadConfig} from "../src/config/configReader.js"

const config = loadConfig("./src/config/analyzer.json");
console.log(config);