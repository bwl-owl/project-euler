const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

const getReplacementIndices = (digits) => {
    if (digits < 2) {
        return [
            []
        ];
    }
    const indices = getReplacementIndices(digits - 1);
    const length = indices.length;
    for (i = 0; i < length; i++) {
        // don't need to include last digit since even numbers are not prime
        indices.push(indices[i].concat([digits - 2]))
    }
    return indices;
}

const replaceDigits = (number, digit, indices) => {
    const numberArray = number.toString().split('');
    for (const index of indices) {
        numberArray[index] = digit.toString();
    }
    return parseInt(numberArray.join(''));
}

const replacePrime = (number, replacement) => {
    let replacedPrimes = [];
    // can't replace most signficant digit with 0
    for (let i = replacement.includes(0) ? 1 : 0; i <= 9; i++) {
        const replaced = replaceDigits(number, i, replacement);
        if (isPrime(replaced)) {
            replacedPrimes.push(replaced);
        }
        // only (9 - i) digits left to try to hit needed number of primes
        if (replacedPrimes.length + 9 - i < 8) {
            return [false, replacedPrimes];
        }
    }
    return [true, replacedPrimes];
}


// TODO: current implementation kind of dumb since replacing all combos of digits; maybe just replace digits that are already the same...?

let number = 56003;
while (true) {
    if (isPrime(number)) {
        // remove first element since will be empty array (used for recursion..)
        const replacements = getReplacementIndices(1 + Math.floor(Math.log10(number))).slice(1);
        for (const replacement of replacements) {
            const [isReplaceablePrime, replacedPrimes] = replacePrime(number, replacement);
            if (isReplaceablePrime) {
                console.log(Math.min(...replacedPrimes));
                return;
            }
        }
    }
    number++;
}
