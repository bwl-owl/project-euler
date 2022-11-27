let factorials = Array(10).fill(1);
for (let i = 1; i < factorials.length; i++) {
    factorials[i] = factorials[i-1] * i;
}

let sum = 0;

// at 7 digits, max sum is 7*9! = 2540160 << 9999999 -> beyond this, sum of factorials stop having poss of equalling number
for (let i = 10; i < 10000000; i++) {
    if (i == i.toString().split('').reduce((sum, digit) => sum + factorials[parseInt(digit)], 0)) {
        sum += i;
    }
}

console.log(sum);