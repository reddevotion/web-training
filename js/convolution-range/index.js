console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])) // '1-4'
console.log(compress([1, 4])) // '1,4'

function compress(list) {
    const sortedArr = list.sort((a,b)=>a-b);
    const result = [];
    let position = 0;

   for (let i=1; i<=sortedArr.length; ++i){
        if (sortedArr[i]-i+position!==sortedArr[position]){
            if (sortedArr[i-1] === sortedArr[position]){
                result.push(sortedArr[position].toString());
            } else {
                result.push(sortedArr[position] + '-' + sortedArr[i-1]);
            }
            position = i;
        }
    }
    return result.join(',');
}
