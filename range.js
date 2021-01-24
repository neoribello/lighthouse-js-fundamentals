function range(start, end, step) {
    let newArray = [];
    if(start >= end || step <= 0) {
        newArray = [];
    } else {
        for(let x = start; x <= end; x += step) {
            newArray.push[x];
        }
    }
    return newArray;
}

console.log(range(0, 10, 2));