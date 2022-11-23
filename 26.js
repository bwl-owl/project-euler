// this is needed because Math.pow() doesn't support the number of digits required
const powerOfTen = (exponent) => {
    let power = 1n;
    for (let i = 1; i <= exponent; i++) {
        power *= 10n;
    }
    return power;
}

let maxCycle = 1;
let number = 1;
for (let i = 1n; i < 1000n; i++) {
    let n = i;
    while (n % 2n == 0n) {
        n /= 2n;
    }
    while (n % 5n == 0n) {
        n /= 5n;
    }
    let exponent = 1;
    while ((powerOfTen(exponent) - 1n) % n !== 0n) {
        exponent++;
    }
    if (exponent > maxCycle) {
        maxCycle = exponent;
        number = n;
    }
}

console.log(number);
