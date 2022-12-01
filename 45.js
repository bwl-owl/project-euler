const getTriangleNumber = (index) => {
    return index * (index + 1) / 2
}

/* Pentagonal numbers must be writable as n(3n-1)/2 where n is a positive integer => to check if a number y is a pentagonal number, solve quadratic equation n(3n-1)/2 - y = 0 => n = (1±sqrt(1+24y))/6 => for integer n, two conditions: (1) 1 + 24y is a square number (2) 1 + sqrt(1+24y) % 6 == 0 */
const isPentagonalNumber = (number) => {
    const squareRoot = Math.sqrt(1 + 24 * number);
    return Number.isInteger(squareRoot) && (1 + squareRoot) % 6 == 0;
}

/* Hexagonal numbers must be writable as n(2n-1) where n is a positive integer => to check if a number y is a pentagonal number, solve quadratic equation n(2n-1) - y = 0 => n = (1±sqrt(1+8y))/4 => for integer n, two conditions: (1) 1 + 8y is a square number (2) 1 + sqrt(1+8y) % 4 == 0 */
const isHexagonalNumber = (number) => {
    const squareRoot = Math.sqrt(1 + 8 * number);
    return Number.isInteger(squareRoot) && (1 + squareRoot) % 4 == 0;
}

let index = 286;
while (true) {
    const triangleNumber = getTriangleNumber(index);
    if (isPentagonalNumber(triangleNumber) && isHexagonalNumber(triangleNumber)) {
        console.log(triangleNumber);
        return;
    }
    index++;
}
