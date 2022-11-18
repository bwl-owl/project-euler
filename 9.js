for (let c = 1000; c > 0; c--) {
    for (let a = 1; 1000 - a - c > a; a++) {
        let b = 1000 - a - c;
        if (a*a + b*b === c*c) {
            console.log(a*b*c);
            return;
        }
    }
}