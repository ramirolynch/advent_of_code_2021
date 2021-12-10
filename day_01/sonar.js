
const fs = require('fs');
const depths = fs.readFileSync('input.txt').toString().split("\n");


let counter = 0;


for (let i=0; i < depths.length; i++) {

    if(depths[i] < depths[i+1]) {
        counter++;
    }
}

console.log(counter);


