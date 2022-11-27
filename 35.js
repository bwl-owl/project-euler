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

const shiftLeft = (numberString) => {
    return numberString.substring(1) + numberString[0];
}

const added = new Set();

const isCircularPrime = (numberString) => {
    if (added.has(numberString)) {
        return true;
    }
    if (numberString.length < 2) {
        return isPrime(parseInt(numberString));
    }

    const rotations = [];
    const originalNumberString = numberString;
    do {
        rotations.push(numberString);
        if (!isPrime(parseInt(numberString))) {
            return false;
        }
        numberString = shiftLeft(numberString);
    } while (numberString != originalNumberString);
    rotations.forEach((rotation) => added.add(rotation));
    return true;
}

let count = 0;
for (let i = 2; i < 100; i++) {
    if (isCircularPrime(i.toString())) {
        count++;
    }
}

console.log(count);
