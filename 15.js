const gridSize = 20;
const paths = Array(gridSize+1).fill(1);
for (let i = 0; i < gridSize; i++) {
	for (let j = 1; j < paths.length; j++) {
		paths[j] += paths[j-1];
	}
}
console.log(paths[gridSize]);