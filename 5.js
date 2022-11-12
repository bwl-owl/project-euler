const isDivisible = (number) => {
    for (let i = 2; i <= 20; i++) {
        if (number % i != 0) {
            return false;
        }
    }
    return true;
};

let candidate = 2520;
while (!isDivisible(candidate)) {
    candidate++;
}
console.log(candidate);