// numerator: [11, 99]
// denominator: [12, 99] and > numerator
// find numerator and denominator who share common digit and when this digit removed, simplifiedNumerator/simplifiedDenominator = numerator/denominator

let productNumerator = 1;
let productDenominator = 1;
for (let numerator = 11; numerator < 100; numerator++) {
    for (let denominator = numerator + 1; denominator < 100; denominator++) {
        const numeratorString = numerator.toString();
        const denominatorString = denominator.toString();
        for (let d1 of numeratorString) {
            for (let d2 of denominatorString) {
                const simplifiedNumerator = parseInt(numeratorString.replace(d1, ''));
                const simplifiedDenominator = parseInt(denominatorString.replace(d1, ''));
                if (d1 == d2 && d1 != '0' && simplifiedNumerator / simplifiedDenominator == numerator / denominator) {
                    productNumerator *= simplifiedNumerator;
                    productDenominator *= simplifiedDenominator;
                }
            }
        }
    }
}

console.log(productNumerator, productDenominator);