/* a + b + c = p, p <= 1000, a^2 + b^2 = c^2 (right-angle triangle) */

const getSolutions = (p) => {
    solutions = [];
    for (let a = 1; a < p; a++) {
        for (let b = 1; b < p - a; b++) {
            c = p - a - b;
            if (a * a + b * b == c * c) {
                solutions.push([a, b, c]);
            }
        }
    }
    return solutions;
}

let max = 0;
let maxP = 1;
for (let p = 1; p <= 1000; p++) {
    // random notes: could just calc number of solutions, don't technically need actual solutions (save space), also the number of unique solutions should be /2 since {a, b, c} is same as {b, a, c}, but since question just wants maxP and it's consistent for every p, it's okay...
    numberOfSolutions = getSolutions(p).length;
    if (numberOfSolutions > max) {
        maxP = p;
        max = numberOfSolutions;
    }
}
console.log(maxP);