// parse input into array of hands, where hands[i] = { player1: { values, suits }, player2: { values, suits } } (values and suits both string[])
let fs = require('fs');
let hands = fs.readFileSync('54.txt').toString().split('\n');

const splitCards = (cards) => {
    let splitCards = {
        values: [],
        suits: []
    };
    const cardsArray = cards.split(' ');
    for (const card of cardsArray) {
        splitCards.values.push(card[0]);
        splitCards.suits.push(card[1]);
    }
    return splitCards;
}

for (let i = 0; i < hands.length; i++) {
    hands[i] = {
        player1: splitCards(hands[i].substring(0, 14)),
        player2: splitCards(hands[i].substring(15, 29))
    };
}

// helper to get value counts
const getCounts = (values) => {
    const counts = {};
    for (const value of values) {
        if (!counts[value]) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
    }
    return counts;
}

// helper to get value frequencies
const getFrequencies = (counts) => {
    const frequencies = {};
    for (const count of Object.values(counts)) {
        if (!frequencies[count]) {
            frequencies[count] = 1;
        } else {
            frequencies[count]++;
        }
    }
    return frequencies;
}

const orderedCardValues = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

const hasStraight = (valueCounts) => {
    for (let i = 0; i + 5 <= orderedCardValues.length; i++) {
        const cardsNeeded = orderedCardValues.slice(i, i + 5);
        if (cardsNeeded.every(card => valueCounts[card])) {
            return true;
        }
    }

    return false;
}

// score from 0 to 8: no repeats, one pair, two pairs, three of a kind, straight, flush, full house, four of a kind, straight flush
const getScore = (hand) => {
    const counts = getCounts(hand.values);
    const frequencies = getFrequencies(counts);
    const suits = new Set(hand.suits);
    const straight = hasStraight(counts);

    // straight flush
    if (straight && suits.size == 1) {
        return 8;
    }

    // four of a kind
    if (frequencies[4] == 1) {
        return 7;
    }

    // full house
    if (frequencies[3] == 1 && frequencies[2] == 1) {
        return 6;
    }

    // flush
    if (suits.size == 1) {
        return 5;
    }

    // straight
    if (straight) {
        return 4;
    }

    // three of a kind
    if (frequencies[3] == 1) {
        return 3;
    }

    // two pairs
    if (frequencies[2] == 2) {
        return 2;
    }

    // one pair
    if (frequencies[2] == 1) {
        return 1;
    }

    return 0;
}

const getSortedValues = (values) => {
    const counts = getCounts(values);

    return values.sort((n1, n2) => {
        // sort by frequency first (i.e. more frequent values = higher ranking), then by value itself
        if (counts[n1] == counts[n2]) {
            return orderedCardValues.indexOf(n1) - orderedCardValues.indexOf(n2);
        }
        return counts[n2] - counts[n1];
    });
}

// get player with highest card
const playerWithHighestCard = (hand) => {
    const player1SortedValues = getSortedValues(hand.player1.values);
    const player2SortedValues = getSortedValues(hand.player2.values);
    let i = 0;
    while (player1SortedValues[i] == player2SortedValues[i]) {
        i++;
    }
    // orderedCardValues has highest ranked card with lowest index
    return orderedCardValues.indexOf(player1SortedValues[i]) < orderedCardValues.indexOf(player2SortedValues[i]) ? 1 : 2;
}

let player1Wins = 0;
for (const hand of hands) {
    const player1Score = getScore(hand.player1);
    const player2Score = getScore(hand.player2);
    if (player1Score > player2Score || (player1Score == player2Score && playerWithHighestCard(hand) == 1)) {
        player1Wins++;
    }
}

console.log(player1Wins);
