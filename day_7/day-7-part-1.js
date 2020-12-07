const fs = require('fs');
// Go through the baggage list and see how many bags can contain a shiny gold bag knowing that if for example a red
// bag can contain a shiny gold bag you will have to check which bags can hold a red one.
fs.readFile('../test-files/baggage-rules.txt', 'utf8', (err, res) => {
   let canContainGoldBags = new Set();
   const bagArray = res.split('.\n').filter((item) => item !== "");
   // gets all bags which can directly contain shiny gold bags
   getBagName(canContainGoldBags, bagArray, 'shiny gold');
   // loop through and check if any of those bags can be contained in other bags
   loopThroughBags(canContainGoldBags, bagArray);
   console.log(`Total number of bags which could contain a shiny gold bag: ${new Set(canContainGoldBags).size}`);
});

function getBagName(canContainGoldBags, bagArray, colour) {
    bagArray.forEach((item) => {
        const [bagColour] = item.match(/(\w+ \w+)(?= bags contain)/);
        if (bagColour === colour) {
            return;
        }
        if (item.includes(colour)) {
            canContainGoldBags.add(bagColour);
        }
    });
}
function loopThroughBags(canContainGoldBags, bagArray) {
    const oldLength = canContainGoldBags.size;
    [...canContainGoldBags].forEach((item) => {
        // checks if any of these colours which can contain gold can be included in any other colour
        getBagName(canContainGoldBags, bagArray, item);
    });
    if (canContainGoldBags.size === oldLength) {
        return;
    }
    return loopThroughBags(canContainGoldBags, bagArray);
}
