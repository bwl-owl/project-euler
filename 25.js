// Binet's formula: for large n, Fibonacci(n) ~= goldenRatio^n / sqrt(5)
// So need to find integer n such that goldenRatio^n / sqrt(5) >= 10^999
// Some rearranging and log laws later => find n >= (999 + log10(sqrt(5))) / log10(goldenRatio)

const goldenRatio = (1 + Math.sqrt(5))/2;
console.log(Math.ceil((999 + Math.log10(Math.sqrt(5))) / Math.log10(goldenRatio)));