const fs = require('fs');
const directions = fs.readFileSync('inputdive.txt').toString().split("\n");


let forwardMove = 0;
let depthMove = 0;

for (let i=0; i<directions.length; i++) {


if(/forward /.test(directions[i])) {

    let arrayDir = directions[i].split('');
    
    forwardMove += parseInt(arrayDir.pop());

}

else if (/down /.test(directions[i])) {


    let arrayDir = directions[i].split('');


    depthMove += parseInt(arrayDir.pop());

}

else if (/up /.test(directions[i])) {

    let arrayDir = directions[i].split('');


    depthMove -= parseInt(arrayDir.pop());


}


}

let result = parseInt(forwardMove * depthMove);

console.log(result);