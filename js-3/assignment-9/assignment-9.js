let origArr = []
let evenNum = [];

function even(arrNum) {
    origArr = []
    evenNum = [];
    origArr = arrNum;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            evenNum.push(arrNum[i]);
        }
    }
    console.log(evenNum);
    return evenNum
}

// even([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log(origArr);
console.log(evenNum);
