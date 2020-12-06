const expenseReport = require('../test-files/expense-report');
// Find two entries in the list that add up to 2020 then multiply the answer
for (let reportItem of expenseReport) {
    const remain = 2020 - reportItem;
    if (expenseReport.includes(remain)) {
        console.log(reportItem * remain + ' is the answer')
        break;
    }
}
