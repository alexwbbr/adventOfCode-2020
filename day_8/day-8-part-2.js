const fs = require('fs');

fs.readFile('../test-files/program-instructions.txt', 'utf8', (err, res) => {
    const programInstructionList = res.split('\n').filter((item) => item !== "");
    let accumulator = 0;
    for (let i = 0; i < programInstructionList.length -1; i++) {
        const instruction = programInstructionList[i];
        const [instType] = instruction.match(/(\w{3})/);
        if (instType === 'jmp' || instType === 'nop') {
            const newInstructions = [...programInstructionList];
            const newInstruction = instType === 'jmp' ? instruction.replace('jmp', 'nop') : instruction.replace('nop', 'jmp');
            newInstructions.splice(i, 1, newInstruction);
            accumulator = getAccumulatorValue(newInstructions);
            if (accumulator !== 0) {
                break;
            }
        }
    }
    console.log(`Last value of accumulator: ${accumulator}`)
});
function getAccumulatorValue(programInstructionList) {
    let accumulator = 0;
    let currentIndex = 0;
    const calledInstructionIndex = [];
    while (calledInstructionIndex.length < programInstructionList.length -1) {
        if (!programInstructionList[currentIndex]) {
            // hit the last line of the instructions to break
            break;
        }
        const [full, instType, operator, value] = programInstructionList[currentIndex].match(/(\w{3}) ([\+|-])(\d+)/);
        // instruction has already been called so about to loop
        if (calledInstructionIndex.includes(currentIndex)) {
            accumulator = 0;
            break;
        }
        calledInstructionIndex.push(currentIndex);
        switch (instType) {
            case 'nop':
                // the instruction below has to be executed next;
                currentIndex++;
                break;
            case 'acc':
                const num = parseInt(value, 10);
                operator === '+' ? accumulator += num : accumulator -= num;
                currentIndex++;
                break;
            case 'jmp':
                const jumpNum = parseInt(value, 10);
                operator === '+' ? currentIndex += jumpNum : currentIndex -= jumpNum;
                break;
        }
    }
    return accumulator;
}
