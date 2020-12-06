const passwordDB = require('../test-files/password-database');
/* validates the passwords match the validation except that now
   1-3 a: abcde means that there has to be the character a at position 1 or 3 but not both
 */
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
