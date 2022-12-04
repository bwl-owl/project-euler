const sortNumber = (number) => {
    return number.toString().split('').sort().join('');
}

const hasPermutedMultiples = (number) => {
    const sortedNumber = sortNumber(number);
    for (i = 2; i <= 6; i++) {
        if (sortNumber(number * i) != sortedNumber) {
            return false;
        }
    }
    return true;
}

let number = 1;
while (true) {
    if (hasPermutedMultiples(number)) {
        console.log(number);
        return;
    }
    number++;
}
