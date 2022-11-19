const previousNumbers = {
    1: 1
};
let numberWithMaxCycle = 1;
for (let i = 1; i < 1000000; i++) {
    let current = i;
    let count = 0;
    while (!previousNumbers[current]) {
        count++;
        if (current % 2) {
            current = 3 * current + 1;
        } else {
            current /= 2;
        }
    }
    previousNumbers[i] = previousNumbers[current] + count;
    if(previousNumbers[i] > previousNumbers[numberWithMaxCycle]) {
        numberWithMaxCycle = i;
    }
}
console.log(numberWithMaxCycle, previousNumbers[numberWithMaxCycle]);
