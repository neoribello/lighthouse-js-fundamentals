const conditionalSum = function(values, condition) {
    // Your code here
    let even = 0;
    let odd = 0;

    //make sure if the value returns for either even/odd
    for(let x = 0; x < values.length; x++) {
        if((values[x] % 2 === 0) && (condition=== "even")) {
            even += values[x];
        } else if((values[x] % 2 != 0) && (condition === "odd")) {
            odd += values[x];
        }
    }

    if ( condition === "even") {    
        return even;
  
      } else if ( condition === "odd") {
        return odd;
    }
  };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));