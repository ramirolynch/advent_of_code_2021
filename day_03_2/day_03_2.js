const fs = require('fs');

const data = fs.readFileSync('input_day_03_2.txt').toString().split("\n");


  function mostCommonDigitArray (array) {

  let digits = [];

   for (let i=0; i<array[0].length; i++) {

    let zero = 0;
    let ones = 0;

    for (let j=0; j<array.length; j++) {

      let arr = array[j].split('')

      if(parseInt(arr[i]) === 0) {

        zero++
      }

      else {
        ones++
      }

    }
    if (zero > ones ) {

      digits.push(0)
    }
    else {
      digits.push(1)
    }

   }

   return digits;
  }

   let mostCommon = mostCommonDigitArray(data)

   function filterArrays(array, index, num) {
    let filteredStrings= array.filter(function(str) {
       num = String(num)
       return str.charAt(index) === num;
    });
    return filteredStrings;
  }


function filterArrayFinal (array) {
  
  let filteredArray = array;
  let i = 0;

  while(filteredArray.length > 1) {

    if (filterArrays(filteredArray, i, mostCommon[i]).length > 0) {

      filteredArray = filterArrays(filteredArray, i, mostCommon[i]) 
      i++
    }
    else {
      break;
    }
  }

  return filteredArray;
}

//console.log(filterArrayFinal(data))


// oxygen generator rating = '000100011100'  

function leastCommonDigitArray (array) {

  let digits = [];

   for (let i=0; i<array[0].length; i++) {

    let zero = 0;
    let ones = 0;

    for (let j=0; j<array.length; j++) {

      let arr = array[j].split('')

      if(parseInt(arr[i]) === 0) {

        zero++
      }

      else {
        ones++
      }

    }
    if (zero > ones ) {

      digits.push(1)
    }
    else {
      digits.push(0)
    }

   }

   return digits;
  }


let leastCommon = leastCommonDigitArray(data)


function filterArrayFinalLeast (array) {

  let filteredArray = array;
  let i = 0;

  while(filteredArray.length > 1) {

    if (filterArrays(filteredArray, i, leastCommon[i]).length > 0) {

      filteredArray = filterArrays(filteredArray, i, leastCommon[i]) 
      i++
    }
    else {
      break;
    }
  }

  return filteredArray;
}

console.log(filterArrayFinalLeast(data))
  


console.log(parseInt('000100011100',2) * parseInt('111011101010',2))



