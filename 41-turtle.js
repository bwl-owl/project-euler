const isPandigital = (numberString) => {
    const seen = new Set();
    for (let digit of numberString) {
        if (digit == "0" || parseInt(digit) > numberString.length || seen.has(digit)) {
            return false;
        }
        seen.add(digit);
    }
    return true;
}

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

for (let i = 987654321; i >= 1; i--) {
    if (isPandigital(i.toString()) && isPrime(i)) {
        console.log(i);
        return;
    }
}