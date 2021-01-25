const numberOfVowels = function(data) {
    // Put your solution here
    let num = 0;
    for(let x = 0; x < data.length; x++) {
        if(data[x] === "a" || data[x] === "e" || data[x] === "i" || data[x] === "o" || data[x] === "u") {
            num++;
        }
    }
    return num;
  };
  
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));