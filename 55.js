const isPalindrome = (string) => {
    let start = 0;
    let end = string.length - 1;

    while (end > start) {
        if (string[start] != string[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

const isLychrel = (number) => {
    let iterations = 0;
    let iterated = BigInt(number);
    while (iterations < 50) {
        iterated += BigInt(iterated.toString().split('').reverse().join(''));
        iterations++;
        if (isPalindrome(iterated.toString())) {
            return false;
        }
    }
    return true;
}

let i = 1;
let count = 0;
while (i < 10000) {
    if (isLychrel(i)) {
        count++;
    }
    i++;
}
console.log(count);
