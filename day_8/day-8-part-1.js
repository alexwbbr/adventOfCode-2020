const fs = require('fs');

fs.readFile('../test-files/program-instructions.txt', 'utf8', (err, res) => {
    const programInstructionList = res.split('\n').filter((item) => item !== "");
    const calledInstructionIndex = [];
    let accumulator = 0;
    let currentIndex = 0;
    while (calledInstructionIndex.length < programInstructionList.length -1) {
        const [full, instType, operator ,value] =  programInstructionList[currentIndex].match(/(\w{3}) ([\+|-])(\d+)/);
        // instruction has already been called so about to loop
        if (calledInstructionIndex.includes(currentIndex)) {
            break;
        }
        calledInstructionIndex.push(currentIndex);
        switch (instType) {
            case 'nop':
                // the instruction below has to be executed next;
                currentIndex++;
                break;
            case 'acc':
                const num =  parseInt(value, 10);
                operator === '+' ? accumulator+= num : accumulator-= num;
                currentIndex++;
                break;
            case 'jmp':
                const jumpNum =  parseInt(value, 10);
                operator === '+' ? currentIndex+= jumpNum : currentIndex-= jumpNum;
                break;
        }
    }
    console.log(`Last value of accumulator: ${accumulator}`)
});
