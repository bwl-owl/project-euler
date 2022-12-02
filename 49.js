const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

const arePermutations = (numbers) => {
    const sorted = numbers[0].toString().split('').sort().join('');
    return numbers.every(number => number.toString().split('').sort().join('') == sorted);
}

for (let i = 1488; i <= 9999; i++) {
    if (isPrime(i)) {
        for (let j = 2; i + 2 * j <= 9999; j += 2) {
            if (arePermutations([i, i + j, i + 2 * j]) && isPrime(i + j) && isPrime(i + 2 * j)) {
                console.log(i.toString() + (i + j).toString() + (i + 2 * j).toString());
                return;
            }
        }
    }
}
