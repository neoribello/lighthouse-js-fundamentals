function howManyHundreds(num) {
    const number = (num - (num % 100)) / 100;
    return number;
}

console.log(howManyHundreds(520), "=?", 5);