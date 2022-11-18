let sum = 0;
let sumOfSquares = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
    sumOfSquares += (i * i);
}
console.log((sum * sum) - sumOfSquares);