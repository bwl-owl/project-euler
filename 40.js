let number = 1;
let count = 0;
let nextIndex = 1;
let product = 1;
while (count < 1000000) {
    let numberLength = number.toString().length;
    if (count + numberLength >= nextIndex) {
        product *= parseInt(number.toString()[nextIndex - count - 1]);
        nextIndex *= 10;
    }
    count += numberLength;
    number++;
}
console.log(product);
