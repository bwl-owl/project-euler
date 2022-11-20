const isAbundant = (number) => {
    let sumOfDivisors = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            sumOfDivisors += i;
            if (i != 1 && number / i != i) {
                sumOfDivisors += number / i;
            }
        }
        if (sumOfDivisors > number) {
            return true;
        }
    }
    return false;
}

const isSumOfTwoAbundantNumbers = (number, abundantNumbers) => {
    for (i = 12; number - i >= 12; i++) {
        if (abundantNumbers.has(i) && abundantNumbers.has(number - i)) {
            return true;
        }
    }
    return false;
}

const limit = 28123;
const abundantNumbers = new Set();
let sum = 0;
for (let i = 1; i <= limit; i++) {
    if (isAbundant(i)) {
        abundantNumbers.add(i);
    }
    if (!isSumOfTwoAbundantNumbers(i, abundantNumbers)) {
        sum += i;
    }
}
console.log(sum);
