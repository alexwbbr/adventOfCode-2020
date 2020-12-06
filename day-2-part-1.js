const passwordDB = require('./test-files/password-database');
/* Check that passwords in the list meet validation criteria
   e.g. 1-3 a: abcde mean there has to be at least 1 and at most 3 a's in the password
*/
let validPasswords = 0;
for (const password of passwordDB) {
    const [lowerLimit, upperLimit, charToValidate, pass] =
        password
        .split(/(\d*)-(\d*) (\w): (\w*)/)
        .filter((item) => item !== "");
    const filteredPassword = pass.split('').filter((item)=> item === charToValidate);
    if (filteredPassword.length >= lowerLimit && filteredPassword.length <= upperLimit) {
        validPasswords++;
    }
}
console.log(`Total number of valid passwords: ${validPasswords}`)
