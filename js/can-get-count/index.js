
function canGetCount(n) {
    let count = 0
    return function newFunc() {
        if (count < n) {
            count++;
            console.log("yes")
        } else {
            console.log("no")
        }
    }
}

const getOne = canGetCount(2);

getOne()//'yes'
getOne()//'yes'
getOne()//'no'

const getTwo = canGetCount(3);

getTwo()//'yes'
getTwo()//'yes'
getTwo()//'yes'
getTwo()//'no'
getTwo()//'no'

