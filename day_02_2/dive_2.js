const fs = require('fs');
const directions = fs.readFileSync('inputdive.txt').toString().split("\n");


let forwardMove = 0;
let depthMove = 0;
let aim = 0;

for (let i=0; i<directions.length; i++) {


if(/forward /.test(directions[i])) {

    let arrayDir = directions[i].split('');

    let num = parseInt(arrayDir.pop());
    
    forwardMove += num

    if (aim > 0) {

        let numDepth = aim * num;

        depthMove += numDepth

    }

}

else if (/down /.test(directions[i])) {


    let arrayDir = directions[i].split('');


    aim += parseInt(arrayDir.pop());

}

else if (/up /.test(directions[i])) {

    let arrayDir = directions[i].split('');


    aim -= parseInt(arrayDir.pop());


}


}

let result = depthMove * forwardMove;

console.log(result);