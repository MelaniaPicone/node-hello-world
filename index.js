//console.log(process.argv[2]);
//console.log("Hello World");

let param = process.argv[2] != undefined ? process.argv[2] : "Boolean"

console.log(`Hello ${param}`);