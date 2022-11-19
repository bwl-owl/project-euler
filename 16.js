const power = 1000;
const digits = Array(power).fill(0);
digits[0] = 1;
let endDigit = 0;
for (let i = 0; i < power; i++) {
    for (let j = endDigit; j >= 0; j--) {
        digits[j] *= 2;
        let currentDigit = j;
        while (digits[currentDigit] >= 10) {
            digits[currentDigit] -= 10;
            digits[currentDigit + 1]++;
            currentDigit++;
        }
        endDigit = Math.max(endDigit, currentDigit);
    }
}
console.log(digits.reduce((sum, number) => sum + number, 0));
