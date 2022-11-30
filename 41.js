const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

let allPandigitalPrimes = [];

const getPandigitalPrimes = (length) => {
    if (length == 1) {
        return [1];
    }

    const numbers = [];
    const numbersOfLastLength = getPandigitalPrimes(length - 1);
    for (let number of numbersOfLastLength) {
        for (i = 0; i < length; i++) {
            const numberString = number.toString();
            numbers.push(parseInt(numberString.substring(0, i) + length.toString() + numberString.substring(i)));
        }
    }

    allPandigitalPrimes.push(...(numbers.filter(number => isPrime(number))));
    return numbers;
}

getPandigitalPrimes(9);
console.log(Math.max(...allPandigitalPrimes));