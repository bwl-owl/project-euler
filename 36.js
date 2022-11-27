const isPalindrome = (string) => {
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string[start] != string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let sum = 0;
for (let i = 1; i < 1000000; i++) {
    if (isPalindrome(i.toString()) && isPalindrome(i.toString(2))) {
        sum += i;
    }
}
console.log(sum);