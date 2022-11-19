const words = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
};

let totalLettersUpTo9 = 0;
for (let i = 1; i <= 9; i++) {
    totalLettersUpTo9 += words[i].length;
}

let totalLettersUpTo99 = totalLettersUpTo9;
let i = 10;
while (i <= 99) {
    if (i < 20 || i % 10 == 0) {
        totalLettersUpTo99 += words[i].length;
        i++;
    } else {
        totalLettersUpTo99 += (words[i - (i % 10)].length)*9 + totalLettersUpTo9;
        i += 9;
    }
}

let totalLetters = totalLettersUpTo99 * 10 + totalLettersUpTo9 * 100 + words[100].length * 900 + 'and'.length * (99 * 9) + 'onethousand'.length;

console.log(totalLetters);
