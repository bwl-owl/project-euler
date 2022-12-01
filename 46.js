const primes = new Set();

const isPrime = (number) => {
    if (primes.has(number)) {
        return true;
    }

    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    primes.add(number);
    return true;
}

const followsConjecture = (number) => {
    for (let prime of primes.values()) {
        if (Number.isInteger(Math.sqrt((number - prime) / 2))) {
            return true;
        }
    }
    return false;
}

let n = 3;
while (true) {
    if (!isPrime(n) && !followsConjecture(n)) {
        console.log(n);
        return;
    }
    // only check odd numbers
    n += 2;
}
