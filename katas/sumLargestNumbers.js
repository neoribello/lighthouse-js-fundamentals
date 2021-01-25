const sumLargestNumbers = function(data) {
    // Put your solution here
    data.sort((a, b) => a - b);
    let myArray = [];
    for (let x = data.length - 2; x <= data.length - 1; x++) {
        myArray.push(data[x]);
    }
        return myArray[0] + myArray[1];
  }
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); 