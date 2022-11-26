let prevCombinations = Array(201).fill(0);
prevCombinations[0] = 1
const combinations = prevCombinations.slice();
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

for (let j = 0; j < coins.length; j++) {
    /* for each possible coin, add additional combinations to answer from prev coin; the new combination is the sum of all prevCombinations[k] where k = amount - someMultipleOfNewCoin. Example: 5 pence coin, amount is 11, i.e. coins[j] = 5, combinations[11], it would be += prevCombinations[6] + prevCombinations[1] */
    for (let i = 1; i < combinations.length; i++) {
        numberOfCurrentCoin = 1;
        while (i - (numberOfCurrentCoin * coins[j]) >= 0) {
            combinations[i] += prevCombinations[i - (numberOfCurrentCoin * coins[j])];
            numberOfCurrentCoin++;
        }
    }

    prevCombinations = combinations.slice();
}

console.log(combinations[200]);
