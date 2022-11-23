let sum = 1;
let currentNumber = 1;
for (let i = 3; i <= 1001; i += 2) {
    for (let j = 0; j < 4; j++) {
        currentNumber += (i - 1);
        sum += currentNumber;
    }
}
console.log(sum);
