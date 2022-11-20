const digits = 10;
const factorials = [1];
for (i = 1; i < digits; i++) {
    factorials.push(i * factorials[i - 1]);
}

let n = 999999;
let permutation = "";
const remainingNumbers = [...Array(digits).keys()];
for (let i = digits - 1; i >= 0; i--) {
    let indexOfNextDigit = Math.floor(n / factorials[i]);
    permutation += remainingNumbers[indexOfNextDigit].toString();
    remainingNumbers.splice(indexOfNextDigit, 1);
    n %= factorials[i];
}

console.log(permutation);
