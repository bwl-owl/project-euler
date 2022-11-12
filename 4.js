const isPalindrome = (number) => {
    const string = number.toString();
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] != string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
};

let ans = 0;
for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        if (isPalindrome(i * j) && i * j > ans) {
            ans = i * j;
        }
    }
}
console.log(ans);
