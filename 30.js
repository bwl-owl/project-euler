const sumOfDigits = (number) => {
    return number.toString().split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 5), 0);
}

let total = 0;
for (let i = 10; i < 1000000; i++) {
    if (sumOfDigits(i) == i) {
        total += i;
    }
}
console.log(total);
