//declaring the variable
var counter;
//counter starts at 100 and ends at 200. Increments by +1
for (counter = 100; counter <= 200; counter++) {
    //if divisible by 3 or 4 console logs "LoopyLighthouse"
    if ((counter % 3 === 0) && (counter % 4 === 0)) {
    console.log("LoopyLighthouse");
    //if divisible by 3 console logs "Loopy"
    } else if (counter % 3 === 0) {
    console.log("Loopy");
    //if divisible by 4 console logs "Lighthouse"
    } else if (counter % 4 === 0) {
    console.log("Lighthouse");
    } else {
    console.log(counter);
    }
}