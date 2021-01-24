function lastIndexOf(arr, num) {
    let count = -1;

    for (let x = arr.length - 1; x >= 0; x--) {
        if(arr[x] === num) {
            return x;
        }
    }

    return -1;
}