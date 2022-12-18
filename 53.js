const nChooseR = (n, r) => {
    let result = 1;
    for (let i = n - r + 1; i <= n; i++) {
        result *= i;
    }
    for (let i = 1; i <= r; i++) {
        result /= i;
    }
    return result;
}

let count = 0;
for (let n = 1; n <= 100; n++) {
    let r = 0;
    // only need to go up to halfway because peaks at midpoint
    while (r <= Math.floor(n / 2)) {
        if (nChooseR(n, r) > 1000000) {
            // all numbers [r, n - r] are >= nChooseR(n, r) so will also be > 1000000
            count += (n + 1) - (2 * r);
            break;
        }
        r++;
    }
}
console.log(count);
