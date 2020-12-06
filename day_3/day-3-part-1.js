const tobogganRun = require('../test-files/toboggan-run');
// Traverse the field to see how many hashes you meet when going 3 right and one down
// the pattern repeats to the right
let stringIndex = 0;
let totalTrees = 0;
tobogganRun.forEach((item, index) => {
    if (index === 0) {
        return;
    }
    // creates a longer item with duplicate pattern
    item = item.repeat(32);
    stringIndex +=3;
    if (item[stringIndex] === '#') {
        totalTrees++;
    }
});
console.log(`The total number of trees hit was: ${totalTrees}`);
