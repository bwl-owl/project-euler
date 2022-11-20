let factorial = 1n;
for (let i = 2n; i <= 100n; i++) {
    factorial *= i;
}
let sum = 0n;
while (factorial > 0) {
    let endDigit = factorial % 10n;
    sum += endDigit;
    factorial = (factorial - endDigit)/10n;
}
console.log(sum);