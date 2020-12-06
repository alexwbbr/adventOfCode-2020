const fs = require('fs');
// Find your seat by calculating the missing seat ID. Your seat will be the only missing ID with
// values +1 and -1 in the list.
fs.readFile('test-files/boarding-passes.txt', 'utf8', (error, res) => {
    const boardingPasses = res.split('\n').filter((item) => item !== "");
    let seatList = [];
    let mySeat = 0;
    boardingPasses.forEach((pass) => {
        const [full, rows, columns] = pass.split(/([FB]+)([RL]+)/);
        const rowNumber = calculatePosition(0, 127, 'F', rows);
        const colNumber = calculatePosition(0, 7, 'L', columns);
        const seatId = (rowNumber * 8) + colNumber;
        seatList.push(seatId);
    });
    seatList.sort((a, b) => a - b).forEach((seat, index) => {
        if (seat + 1 === seatList[index + 1] || index === seatList.length - 1) {
            return;
        }
        mySeat = seat + 1;
    });
    console.log(`My seat ID is ${mySeat}`)
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
