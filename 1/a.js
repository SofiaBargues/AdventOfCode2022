/*

Input:
linea = cal de un ittem 
lineas consecutivas = ittem de un elfo 
salto de linea = elfo nuevo 

Output:
cal del elfo con mayor cal

*/


const fs = require('fs');
const lineReader = require('line-reader');

function readData() {
    let lines = []
    try {
        lineReader.eachLine('./1/a_input.txt', (line, last) => {
            lines.push(line)
            console.log(line);
        });
        // const content = fs.readFileSync('./1/a_input.txt', 'utf8');
        // console.log(content);
        return lines
    } catch (err) {
        console.error(err);
    }
}

const data = readData();

data

