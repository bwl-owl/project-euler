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

// constants
const orderedCardValues = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const noWin = 0;
const bothWin = 3;

// get player(s) (if any) with the highest straight (all cards consecutive)
const highestStraight = (player1Values, player2Values) => {
    let wins = noWin;
    for (let i = 0; i + 5 <= orderedCardValues.length; i++) {
        const cardsNeeded = orderedCardValues.slice(i, i + 5);
        if (cardsNeeded.every(card => player1Values.has(card))) {
            wins++;
        }
        if (cardsNeeded.every(card => player2Values.has(card))) {
            wins += 2;
        }
        if (wins) {
            return wins;
        }
    }
    return wins;
}

// get player(s) (if any) with flush (same suit)
const flush = (player1Suits, player2Suits) => {
    let wins = noWin;
    if (player1Suits.size == 1) {
        wins++;
    }
    if (player2Suits.size == 1) {
        wins += 2;
    }
    return wins;
}

// get player with highest card
const highestCard = (player1Values, player2Values) => {
    // remove tied values
    player1Values.forEach(value => player2Values.delete(value));
    player2Values.forEach(value => player1Values.delete(value));
    for (const value of orderedCardValues) {
        if (player1Values.has(value)) {
            return 1;
        }
        if (player2Values.has(value)) {
            return 2;
        }
    }
    // case where empty/all dupes passed
    return 0;
}

// helper to get Set of card values with count needed
const cardsWithCounts = (cardCounts, countNeeded) => {
    return new Set(Object.keys(cardCounts).filter(key => cardCounts[key] === count));
}

// get player(s) (if any) with (highest if both) 'X of a kind'
const highestOfAKind = (player1ValueCounts, player2ValueCounts, count) => {
    return highestCard(cardsWithCounts(player1ValueCounts, count), cardsWithCounts(player2ValueCounts, count));
}

// get player(s) (if any) with (highest 3 of a kind, then highest pair) full house
const highestFullHouse = (player1ValueCounts, player2ValueCounts) => {
    const highestThree = highestOfAKind(player1ValueCounts, player2ValueCounts, 3);
    if (highestThree == 1 && cardsWithCounts(player1ValueCounts, 2).size > 0) {
        return 1;
    }
    if (highestThree == 2 && cardsWithCounts(player2ValueCounts, 2).size > 0) {
        return 2;
    }
    const highestTwo = highestOfAKind(player1ValueCounts, player2ValueCounts, 2);
    if (highestTwo == 1 && cardsWithCounts(player1ValueCounts, 3).size > 0) {
        return 1;
    }
    if (highestTwo == 2 && cardsWithCounts(player2ValueCounts, 3).size > 0) {
        return 2;
    }
    return 0;
}

// helper to get value counts for each player
const getValueCounts = (values) => {
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

let player1Wins = 0;

for (const hand of hands) {
    const player1Values = new Set(hand.player1.values);
    const player2Values = new Set(hand.player2.values);
    const player1Suits = new Set(hand.player1.suits);
    const player2Suits = new Set(hand.player2.suits);

    const flushResult = flush(player1Suits, player2Suits);
    const highestStraightResult = highestStraight(player1Values, player2Values);

    // check for straight flush/royal flush (royal automatically prioritised by highestStraight function)
    if (flushResult) {
        player1Wins += (highestStraightResult == 1);
    }

    const player1ValueCounts = getValueCounts(hand.player1.values);
    const player2ValueCounts = getValueCounts(hand.player2.values);

    // check for four of a kind
    player1Wins += (highestOfAKind(player1ValueCounts, player2ValueCounts, 4) == 1);

    // check for full house
    player1Wins += (highestFullHouse(player1ValueCounts, player2ValueCounts) == 1);

    const highestCardResult = highestCard(player1Values, player2Values);

    // check for flush
    player1Wins += (flushResult == 1 || (flushResult == 3 && highestCardResult == 1));

    // check for straight
    player1Wins += (highestStraightResult == 1);

    // check for three of a kind
    player1Wins += (highestOfAKind(player1ValueCounts, player2ValueCounts, 3) == 1);

    // check for two pairs
    player1Wins += highestOfAKind(player1ValueCounts, player2ValueCounts, 2);

    // check for one pair
    player1Wins += highestOfAKind(player1ValueCounts, player2ValueCounts, 2);

}
