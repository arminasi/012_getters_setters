"use strict"

function getBestStudent(obj) {
  const arr = [];
  for(const [key, value] of Object.entries(obj)) {
    arr.push([key, value.reduce(function(acc, elem) {
      return acc + elem;
    })/value.length])
  }
  let higher;
  let current = arr[0][1];
  for(let i = 0; i < arr.length; i++) {
    if(current < arr[i][1]) {
      current = arr[i][1].toFixed(2);
      higher = arr[i][0];
    }
  }
  return `${higher} is most graded student which result is ${current}`;
}

console.log(getBestStudent(
  {
    John: [100, 90, 80],
    Jim: [100, 100, 90],
    Bob: [100, 70, 80],
  }
));

