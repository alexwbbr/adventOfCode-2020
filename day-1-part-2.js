const expenseReport = require('./test-files/expense-report');

for (let i = 0; i <= expenseReport.length -1; i++) {
    const remain = 2020 - expenseReport[i];
    let firstPotentialNumber = expenseReport[i];
    let secondPotentialNumber = 0;
    let thirdPotentialNumber = 0;
    let finalNumber = 0;
    for (let j = i+1; j <= expenseReport.length - 1; j++) {
        secondPotentialNumber = expenseReport[j];
        thirdPotentialNumber = remain - secondPotentialNumber;
        if (expenseReport.includes(thirdPotentialNumber)) {
            finalNumber = firstPotentialNumber * secondPotentialNumber * thirdPotentialNumber;
            break;
        }
    }
    if (finalNumber) {
        console.log(`Answer is ${finalNumber} with ${firstPotentialNumber}, ${secondPotentialNumber}, ${thirdPotentialNumber}`)
        break;
    }
}
