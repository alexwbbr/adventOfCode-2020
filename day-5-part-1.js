const fs = require('fs');

fs.readFile('test-files/boarding-passes.txt', 'utf8', (error, res) => {
    const boardingPasses = res.split('\n').filter((item) => item !== '');
    let highestSeatId = 0;
    boardingPasses.forEach((pass) => {
        const [full, rows, columns] = pass.split(/([FB]+)([RL]+)/);
        const rowNumber = calculatePosition(0, 127, 'F', rows);
        const colNumber = calculatePosition(0, 7, 'L', columns);
        const seatId = (rowNumber * 8) + colNumber;
        if (seatId > highestSeatId) {
            highestSeatId = seatId;
        }
    });
    console.log(`The highest seat ID is:${highestSeatId}`)
});

function calculatePosition(lowerLimit, upperLimit, lowerChar, string) {
    string.split('').forEach((row) => {
        const midPoint = ((upperLimit - lowerLimit) / 2) + lowerLimit;
        if (row === lowerChar) {
            upperLimit = Math.floor(midPoint);
        } else {
            lowerLimit = Math.ceil(midPoint);
        }
    });
    return lowerLimit;
}
