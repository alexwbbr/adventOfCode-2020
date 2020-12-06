const fs = require('fs');
// Validate peoples passports are valid, must contain at least 7 fields if cid is missing
fs.readFile('test-files/passport-list.txt', 'utf8', (error, res) => {
    const passportLists = res.split('\n\n');

    const totalValidPassports = passportLists.reduce((validPassports, passport) => {
        const numberOfItems = passport.split('').filter((item) => item === ':').length;
         if (numberOfItems === 8 || numberOfItems === 7 && !passport.includes('cid')) {
             return validPassports+= 1;
         }
         return validPassports;
    }, 0);
    console.log(`Total valid passports: ${totalValidPassports}`);
});
