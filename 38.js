/* since 918273645 given as example, any improvements must be number starting with 9
2-digit and 3-digit numbers can be ruled out as they will not give pandigital concatenations (2-digit * 1 = 2-digit, * 2 = 3-digit (number starts with 9), * 3 = 3-digit, * 4 = 3-digit -> can't get 9-digit combo; similar logic for 3-digit)
Following this logic, only combos to try are 4-digit numbers and (1, 2) */

const isPandigital = (numberString) => {
    if (numberString.length != 9) {
        return false;
    }
    const seen = new Set();
    for (let digit of numberString) {
        if (digit == "0" || seen.has(digit)) {
            return false;
        }
        seen.add(digit);
    }
    return true;
}

for (let i = 9876; i >= 9123; i--) {
    const concatenatedProduct = i.toString() + (i * 2).toString();
    if (isPandigital(concatenatedProduct)) {
        console.log(concatenatedProduct);
        return;
    }
}

