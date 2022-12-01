const getPrimeFactors = (number) => {
    const primeFactors = new Set();
    let factor = 2;
    while (number > 1) {
        while (number % factor == 0) {
            primeFactors.add(factor);
            number /= factor;
        }
        factor++;
    }
    return primeFactors;
}

const consecutive = 4;
let n = 1;
while (true) {
    for (let i = 0; i < consecutive; i++) {
        const primeFactors = getPrimeFactors(n + i);
        if (primeFactors.size != consecutive) {
            n += i + 1;
            break;
        }
        if (i == consecutive - 1) {
            console.log(n);
            return;
        }
    }
}