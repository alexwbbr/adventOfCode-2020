const fs = require('fs');
// the first 25 numbers are preamble after those 25 find out which number in the first in the list
// to not be the sum of any of the first 25 numbers
fs.readFile('../test-files/xmas-data.txt', 'utf8', (err, res) =>{
    const dataList = res
        .split('\n')
        .filter((item) => item !== "")
        .map((number) => parseInt(number, 10));

    let attackNumber = 0;
    for(let i = 25; i < dataList.length - 1; i++) {
        const preAmbleNum = [...dataList].splice(i - 25, i);
        if (!calculateSum(preAmbleNum, dataList[i])){
            attackNumber = dataList[i];
            break;
        }
    }
    console.log(`The attack number is ${attackNumber}`);
});
function calculateSum(preAmbleNum, targetNum) {
    let result = false;
    for (let item of preAmbleNum) {
        if (preAmbleNum.includes(targetNum - item)) {
            result = true;
            break;
        }
    }
    return result;
}
