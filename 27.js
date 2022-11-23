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

let count = 0;
let bestA = 0;
let bestB = 0;
for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
        let n = 0;
        while (isPrime(n * n + a * n + b)) {
            n++;
        }
        if (n > count) {
            count = n;
            bestA = a;
            bestB = b;
        }
    }
}

console.log(bestA, bestB, bestA*bestB);