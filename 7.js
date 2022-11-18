const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
};
let count = 0;
let candidate = 0;
while (count < 10001) {
    candidate++;
    if (isPrime(candidate)) {
        count++;
    }
}
console.log(candidate);