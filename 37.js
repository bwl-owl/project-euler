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

const isTruncatablePrime = (number) => {
    if (!isPrime(number)) {
        return false;
    }

    let numberString = number.toString();
    for (let i = 1; i < numberString.length; i++) {
        if (!isPrime(parseInt(numberString.substring(i))) || !isPrime(parseInt(numberString.substring(0, i)))) {
            return false;
        }
    }

    return true;
}

let sum = 0;
let count = 0;
let number = 10;
while (count < 11) {
    if (isTruncatablePrime(number)) {
        sum += number;
        count++;
    }
    number++;
}
console.log(sum);
