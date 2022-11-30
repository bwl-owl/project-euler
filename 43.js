const hasSubstringProperty = (numberString) => {
    const divisors = [2, 3, 5, 7, 11, 13, 17];
    for (let i = 1; i <= 7; i++) {
        if (numberString.substring(i, i + 3) % divisors[i - 1] != 0) {
            return false;
        }
    }
    return true;
}

const getPandigitalNumbers = (length) => {
    if (length == 1) {
        return [1];
    }

    const numbersPreviousLength = getPandigitalNumbers(length - 1);
    const numbers = [];
    for (let number of numbersPreviousLength) {
        for (i = 0; i < length; i++) {
            const numberString = number.toString();
            numbers.push(parseInt(numberString.substring(0, i) + length.toString() + numberString.substring(i)));
        }
    }

    return numbers;
}

const pandigitalNumbers = getPandigitalNumbers(9);
const pandigitalNumbersWithSubstringProperty = [];
for (let number of pandigitalNumbers) {
    for (i = 1; i < 10; i++) {
        const numberString = number.toString();
        const numberWithZero = numberString.substring(0, i) + "0" + numberString.substring(i);
        if (hasSubstringProperty(numberWithZero)) {
            pandigitalNumbersWithSubstringProperty.push(parseInt(numberWithZero));
        }
    }
}

console.log(pandigitalNumbersWithSubstringProperty.reduce((sum, number) => sum + number, 0));
