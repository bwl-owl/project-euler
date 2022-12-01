/* Pentagonal numbers must be writable as n(3n-1)/2 where n is a positive integer => to check if a number y is a pentagonal number, solve quadratic equation n(3n-1)/2 - y = 0 => n = (1±sqrt(1+24y))/6 => for integer n, two conditions: (1) 1 + 24y is a square number (2) 1 + sqrt(1+24y) % 6 == 0 */
const isPentagonalNumber = (number) => {
    const squareRoot = Math.sqrt(1 + 24 * number);
    return Number.isInteger(squareRoot) && (1 + squareRoot) % 6 == 0;
}

const getPentagonalNumber = (index) => {
    return index * (3 * index - 1) / 2
}

let index = 1;
while (true) {
    for (let i = index - 1; i > 0; i--) {
        const difference = getPentagonalNumber(index) - getPentagonalNumber(i);
        if (isPentagonalNumber(getPentagonalNumber(index) + getPentagonalNumber(i)) && isPentagonalNumber(difference)) {
            console.log(index, i, difference);
            return;
        }
    }
    index++;
}
