const passwordDB = require('./password-database');

let validPasswords = 0;
for (const password of passwordDB) {
    const [lowerLimit, upperLimit, charToValidate, pass] =
        password
            .split(/(\d*)-(\d*) (\w): (\w*)/)
            .filter((item) => item !== "");
    const splitPass = pass.split('');
    if (splitPass[lowerLimit - 1] === charToValidate ^ splitPass[upperLimit - 1] === charToValidate) {
        validPasswords++
    }
}
console.log(`Total number of valid passwords: ${validPasswords}`)
