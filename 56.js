const sumOfDigits = (bigInt) => {
    return bigInt.toString().split('').reduce((sum, number) => sum + parseInt(number), 0);
}

let maxSum = 0;
for (let i = 2n; i < 100n; i++) {
    for (let j = 1n; j < 100n; j++) {
        maxSum = Math.max(maxSum, sumOfDigits(i**j));
    }
}
console.log(maxSum);
