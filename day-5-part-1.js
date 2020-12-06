const fs = require('fs');
/* Calculates the highest seat ID on the plane by checking the boarding passes
    each boarding pass is made up of BFFFBBFRRR, the first 7 chars give the row and the last
    3 give the column. F means take the lower half of the rows, and B means take the upper half.
    L means the same where you take the lower half of the columns and R means take the upper half
 */
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
