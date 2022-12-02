// modular arithmetic properties: (a*b) % c = ((a % c) * (b % c) )% c, (a+b) % c = ((a % c) + (b % c) )% c
// https://en.wikipedia.org/wiki/Modular_arithmetic#Properties

let sum = 0;
let mod = Math.pow(10, 10); // get last 10 digits
for (let i = 1; i <= 1000; i++) {
    let power = 1;
    for (let j = 0; j < i; j++) {
        power *= i;
        power %= mod;
    }
    sum += power;
    sum %= mod;
}
console.log(sum);
