const passwordDB = require('./password-database');

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
