const tobogganRun = require('./test-files/toboggan-run');
// Count how many hashes you meet when going through the field at different rates
const totalTreesRun1 = countTrees(1);
const totalTreesRun2 = countTrees(3);
const totalTreesRun3 = countTrees(5);
const totalTreesRun4 = countTrees(7);
const totalTreesRun5 = countTrees(1, 2);

console.log(`The total number of trees hit was: ${totalTreesRun1} , ${totalTreesRun2}, ${totalTreesRun3}, ${totalTreesRun4}, ${totalTreesRun5}`);
console.log(`Multiplied is: ${totalTreesRun1 * totalTreesRun2 * totalTreesRun3 * totalTreesRun4 * totalTreesRun5}`)
function countTrees(rightSpacer, downShift = 1) {
    let totalTrees = 0;
    let stringIndex = 0;
    tobogganRun.forEach((item, index) => {
        if (index === 0) {
            return;
        }
        if (index % downShift !== 0) {
            return;
        }
        // creates a longer item with duplicate pattern
        item = item.repeat(((322 * rightSpacer) / 31) + 1);
        stringIndex +=rightSpacer;
        if (item[stringIndex] === '#') {
            totalTrees++;
        }
    });
    return totalTrees;
}

