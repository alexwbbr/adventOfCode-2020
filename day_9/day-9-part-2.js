const fs = require('fs');
// using the answer form part one find a list of continuous which add up to the answer
// then take the lowest and highest values and add them together
fs.readFile('../test-files/xmas-data.txt', 'utf8', (err, res) =>{
    const dataList = res
        .split('\n')
        .filter((item) => item !== "")
        .map((number) => parseInt(number, 10));
    const totalNum = 1930745883;
    let encryptionWeakness = 0;
    let lowerIndex = 0;
    let upperIndex = 0;
    for (let i = 0; i< dataList.length - 1; i++) {
        let total = 0;
        for(const item of [...dataList].splice(i)) {
            total+= item;
            if (total > totalNum) {
                total = 0;
                break;
            } else if (total === totalNum) {
                lowerIndex = i;
                upperIndex = dataList.indexOf(item);
                break;
            }
        }
        if (upperIndex !== 0) {
            break;
        }
    }
    const validNum = dataList.slice(lowerIndex, upperIndex + 1);
    let lowestValue = validNum[0];
    let highestValue = 0;
    validNum.forEach((item)=> {
        if (item > highestValue) {
            highestValue = item;
        }
        if (item < lowestValue) {
            lowestValue = item;
        }
    });
    encryptionWeakness = lowestValue + highestValue;
    console.log(`The attack number is ${encryptionWeakness}`);
});

