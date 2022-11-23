const getPrimeFactors = (number) => {
    let i = 2;
    const primeFactors = Array(100).fill(0);
    while (number > 1) {
        while (number % i == 0) {
            number /= i;
            primeFactors[i]++;
        }
        i++;
    }
    return primeFactors;
}

let count = 0;
const seen = new Set();
const primeFactors = {};
for (let a = 2; a <= 100; a++) {
    primeFactors[a] = getPrimeFactors(a);
    for (let b = 2; b <= 100; b++) {
        const primeFactorsString = primeFactors[a].map(exponent => exponent * b).join();
        if (!seen.has(primeFactorsString)) {
            seen.add(primeFactorsString);
            count++;
        }
    }
}

console.log(count);