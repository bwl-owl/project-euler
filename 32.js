// TODO: make less ugly

const twoDigitNumbers = [];
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (i !== j) {
            twoDigitNumbers.push(i * 10 + j);
        }
    }
}

const threeDigitNumbers = [];
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < twoDigitNumbers.length; j++) {
        if (!twoDigitNumbers[j].toString().includes(i.toString())) {
            threeDigitNumbers.push(i * 100 + twoDigitNumbers[j]);
        }
    }
}

const fourDigitNumbers = [];
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < threeDigitNumbers.length; j++) {
        if (!threeDigitNumbers[j].toString().includes(i.toString())) {
            fourDigitNumbers.push(i * 1000 + threeDigitNumbers[j]);
        }
    }
}

const sharesDigits = (n1, n2) => {
    for (let d1 of n1.toString()) {
        for (let d2 of n2.toString()) {
            if (d1 == d2) {
                return true;
            }
        }
    }
    return false;
}

const hasUniqueDigits = (number) => {
    return new Set(number.toString().split('')).size == number.toString().length;
}

let sum = 0;
let added = new Set();

// only possible combos are 1 digit * 4 digit = 4 digit or 2 digit * 3 digit = 5 digit

for (let i = 1; i < 10; i++) {
    for (let fourDigitNumber of fourDigitNumbers) {
        if (!sharesDigits(i, fourDigitNumber)) {
            product = i * fourDigitNumber;
            if (!added.has(product) && hasUniqueDigits(product) && !sharesDigits(i, product) && !sharesDigits(fourDigitNumber, product) && !sharesDigits(0, product)) {
                sum += product;
                added.add(product);
            }
        }
    }
}

for (let twoDigitNumber of twoDigitNumbers) {
    for (let threeDigitNumber of threeDigitNumbers) {
        if (!sharesDigits(twoDigitNumber, threeDigitNumber)) {
            product = twoDigitNumber * threeDigitNumber;
            if (!added.has(product) && hasUniqueDigits(product) && !sharesDigits(twoDigitNumber, product) && !sharesDigits(threeDigitNumber, product) && !sharesDigits(0, product)) {
                sum += product;
                added.add(product);
            }
        }
    }
}

console.log(sum);
