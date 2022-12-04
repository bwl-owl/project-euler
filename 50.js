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

const primes = [];
const maxSum = 1000000;
for (let i = 0; i < maxSum; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

const primesSet = new Set(primes);
let maxConsecutive = 1;
let prime = 2;
for (let i = 0; primes[i] < maxSum; i++) {
    let sum = primes[i];
    for (let j = i + 1; sum + primes[j] < maxSum; j++) {
        sum += primes[j];
        if (primesSet.has(sum) && j - i + 1 > maxConsecutive) {
            maxConsecutive = j - i + 1;
            prime = sum;
        }
    }
}

console.log(prime, maxConsecutive);
