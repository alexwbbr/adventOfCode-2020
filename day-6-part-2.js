const fs = require('fs');

fs.readFile('test-files/customs-forms.txt', 'utf8', (err, res) => {
    const customForms = res.split('\n\n');
    let totalQuestions = 0;
    customForms.forEach((group) => {
        // split the group to see how many people there are
        const peoplesAnswers = group.split(/\n/).filter((item) => item !== "");
        if (peoplesAnswers.length === 1) {
            // one person in group same calculation as before
            totalQuestions += calculateUniqueArray(peoplesAnswers[0]);
            return;
        }
        // otherwise there are multiple people in the group
        const tmpArray = [];
        peoplesAnswers.forEach((answer, index) => {
            // slit each persons answer into array
            answer.split('').forEach((item) => {
                // check every person in the group has the persons individual answer
                const length = peoplesAnswers.filter((string) => string.indexOf(item) > -1).length;
                // if the length of the filter matches how many people are in the group then they must have all answered yes
                if (length === peoplesAnswers.length && !tmpArray.includes(item)) {
                    tmpArray.push(item);
                }
            });
        });
        totalQuestions += tmpArray.length;
    });
    console.log(`Total amount of questions: ${totalQuestions}`);
});

function calculateUniqueArray(string) {
    const tmpArray = [];
    string.split('').forEach((item) => {
        if (!tmpArray.includes(item)) {
            tmpArray.push(item);
        }
    });
    return tmpArray.length;
}
