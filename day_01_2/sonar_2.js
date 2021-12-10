const fs = require('fs');
const depths = fs.readFileSync('input.txt').toString().split("\n");

const depthsNumbers = []

for(let i=0; i < depths.length; i++) {

    depthsNumbers.push(parseInt(depths[i]));

}


let counter=0;


for (let i=0; i <depths.length; i++) {

    if (depths[i+3] === null) { 
        break;
    }

    else {
   
    if (depthsNumbers[i] + depthsNumbers[i+1] + depthsNumbers[i+2] < depthsNumbers[i+1] + depthsNumbers[i+2] + depthsNumbers[i+3]) 

    {
        
        counter++;

        
    }

}

}

console.log(counter);



