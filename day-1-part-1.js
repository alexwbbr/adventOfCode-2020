const expenseReport = require('./expense-report');

for (let reportItem of expenseReport) {
    const remain = 2020 - reportItem;
    if (expenseReport.includes(remain)) {
        console.log(reportItem * remain + ' is the answer')
        break;
    }
}
