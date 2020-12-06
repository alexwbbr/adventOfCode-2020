const fs = require('fs');
// Calculate how many people answered yes to the customs form. Make a unique array for each group
// then add them up
fs.readFile('test-files/customs-forms.txt', 'utf8', (err, res) => {
    const customForms = res.split('\n\n');
    let totalQuestions = 0;
    customForms.forEach((group) => {
        const stringArray = group.replace(/\n/gm, '').split('');
        totalQuestions += new Set(stringArray).size;
    });
    console.log(`Total amount of questions: ${totalQuestions}`);
});
