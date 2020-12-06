const fs = require('fs');

fs.readFile('test-files/customs-forms.txt', 'utf8', (err, res) => {
    const customForms = res.split('\n\n');
    let totalQuestions = 0;
    customForms.forEach((group) => {
        const tmpArray = [];
        group
            .replace(/\n/gm, '')
            .split('')
            .forEach((item) => {
              if (!tmpArray.includes(item)) {
                  tmpArray.push(item);
              }
            })
        totalQuestions += tmpArray.length;
    });
    console.log(`Total amount of questions: ${totalQuestions}`);
});
