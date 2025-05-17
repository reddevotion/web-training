function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

function range(start = 0, end, step = 1, isRight = false) {
    if (end === undefined) {
        end = start
        start = 0
    }
    const result = []
    step = Math.abs(step)
    if (step !== 0) {
        if (end > start) {
        for (let i = start; i < end; i+=step) {
            result.push(i)
        }}
        else {
        for (let i = start; i > end; i-=step) {
            result.push(i)
        }}
    } else {
        const length = Math.max(0, end - start);
        return Array(length).fill(start);
    }
    return isRight ? result.reverse() : result;
}

console.log(range(4)); // => [ 0, 1, 2, 3 ]
console.log(range(-4)); // => [ 0, -1, -2, -3 ]
console.log(range(1, 5)); // => [ 1, 2, 3, 4 ]
console.log(range(0, 20, 5)); // => [ 0, 5, 10, 15 ]
console.log(range(0, -4, -1)); // => [ 0, -1, -2, -3 ]
console.log(range(1, 4, 0)); // => [1, 1, 1]
console.log(range(0)); // => []  

console.log(rangeRight(4)); // => [ 3, 2, 1, 0 ]
console.log(rangeRight(-4)); // => [ -3, -2, -1, 0 ]
console.log(rangeRight(1, 5)); // => [ 4, 3, 2, 1 ]
console.log(rangeRight(0, 20, 5)); // => [ 15, 10, 5, 0 ]
console.log(rangeRight(0, -4, -1)); // => [ -3, -2, -1, 0 ]
console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]
console.log(rangeRight(0)); // => []  