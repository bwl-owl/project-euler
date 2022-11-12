let number = 600851475143;
let divisor = 2;
let maxDivisor = undefined;
while (number > 1) {
    if (number % divisor == 0) {
        number /= divisor;
        maxDivisor = divisor;
    } else {
        divisor++;
    }
}
console.log(maxDivisor !== undefined ? maxDivisor : number);