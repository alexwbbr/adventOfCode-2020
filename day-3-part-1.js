const tobogganRun = require('./toboggan-run');

let stringIndex = 0;
let totalTrees = 0;
tobogganRun.forEach((item, index) => {
    if (index === 0) {
        return;
    }
    // creates a longer item with duplicate pattern
    item = item.repeat(32);
    stringIndex +=3;
    // odd numbers are the go down one so don't increment index
    if (item[stringIndex] === '#') {
        totalTrees++;
    }
});
console.log(`The total number of trees hit was: ${totalTrees}`);
