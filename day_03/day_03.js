const fs = require('fs');
const { isNull } = require('util');
const directions = fs.readFileSync('input_day_03.txt').toString().split("\n");


let number = [0,0,0,0,0,0,0,0,0,0,0,0];



for (let i=0; i<directions.length; i++) {

    let newArray = directions[i].split('')

        for (let j=0; j < newArray.length; j++) {

            if(parseInt(newArray[j]) === 1 ) {

                number[j]++
            }
            else {
                number[j]--
            }
   
        }

}

let binaryNumber = []

let epsilon = []

for (let i=0; i<number.length; i++) {

    if (number[i] < 0) {
        binaryNumber.push(0)
    }
    else {
        binaryNumber.push(1)
    }
}

let gammaRate = binaryNumber.join('')


for (let i=0; i<number.length; i++) {

    if (number[i] > 0) {
        epsilon.push(0)
    }
    else {
        epsilon.push(1)
    }
}

let epsilonRate = epsilon.join('')

console.log(gammaRate)
console.log(epsilonRate)

console.log(parseInt(gammaRate,2))
console.log(parseInt(epsilonRate,2))


console.log(parseInt(gammaRate, 2)*parseInt(epsilonRate,2))

