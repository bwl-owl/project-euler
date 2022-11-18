const isPrime = (number) => {
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
};

let sum = 0;
for (let i = 2; i < 2000000; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}
console.log(sum);