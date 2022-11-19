// TODO: be less trash??

const numberOfDivisors = (number) => {
    let divisors = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            divisors++;
        }
    }
    return divisors;
}

let count = 12370;
let triangularNumber = count*(count+1)/2;
while (numberOfDivisors(triangularNumber) <= 500) {
    count++;
    triangularNumber += count;
}

console.log(triangularNumber);
