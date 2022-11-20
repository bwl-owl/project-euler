const sumOfDivisors = (number) => {
    let sum = 0;
    for (i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            sum += i;
            if (i > 1 && number / i != i) {
                sum += number / i;
            }
        }
    }
    return sum;
}

let sumOfAmicableNumbers = 0;
for (let i = 0; i < 10000; i++) {
    const sum = sumOfDivisors(i);
    if (i != sum && i == sumOfDivisors(sum)) {
        sumOfAmicableNumbers += i + sum;
    }
}

console.log(sumOfAmicableNumbers/2);