let n1 = 1;
let n2 = 2;
let sum = 2;
while (n1 + n2 < 4000000) {
    let temp = n2;
    n2 += n1;
    n1 = temp;
    if (n2 % 2 == 0) {
        sum += n2;
    }
}
console.log(sum);