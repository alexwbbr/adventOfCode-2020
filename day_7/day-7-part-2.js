const fs = require('fs');
let bagArray = []
fs.readFile('../test-files/baggage-rules.txt', 'utf8', (err, res) => {
    bagArray = res.split('.\n').filter((item) => item !== "");
    const goldBagRules = getBagRules('shiny gold');
    let bagCount = 0;
    const totalBags = calculateTotalBags(goldBagRules, bagCount, 1);
    console.log(`Total number of bags which could contain a shiny gold bag: ${totalBags}`);
});

function calculateTotalBags(bagRules, counter, numberBefore) {
    for (const rule of bagRules) {
        const [full, number, subBagColour] = rule.match(/(\d) (\w+ \w+)/);
        const num = parseInt(number);
        const newNumBefore = num * numberBefore;
        counter += newNumBefore;
        const subBagRules = getBagRules(subBagColour);
        if (subBagRules) {
            counter = calculateTotalBags(subBagRules, counter, newNumBefore);
        }
    }
    return counter;
}

function getBagRules(colour) {
    return bagArray.find((item) => {
        const [bagColour] = item.match(/(\w+ \w+)(?= bags contain)/);
        return bagColour === colour;
    }).match(/(\d \w+ \w+)(?= bag|s)/gm);
}
