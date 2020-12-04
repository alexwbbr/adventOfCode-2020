const fs = require('fs');

fs.readFile('passport-list.txt', 'utf8', (error, res) => {
    const passportLists = res.split('\n\n');

    const totalValidPassports = passportLists.reduce((validPassports, passport) => {
        // gets the total number of items in the string
        const numberOfItems = passport.split('').filter((item) => item === ':').length;
        // no point checking them if they don't have the required 7
        if (numberOfItems === 8 || numberOfItems === 7 && !passport.includes('cid')) {
            const validation = [
                validateFourDigitNumber('byr', 1920, 2002, passport),
                validateFourDigitNumber('iyr', 2010, 2020, passport),
                validateFourDigitNumber('eyr', 2020, 2030, passport),
                validateHeight(passport),
                validateHairColour(passport),
                validateEyeColour(passport),
                validatePassportId(passport)
            ];
            if (!validation.includes(false)) {
                return validPassports += 1;
            }
        }
        return validPassports;
    }, 0);
    console.log(`Total valid passports: ${totalValidPassports}`);
});

function validateFourDigitNumber(type, min, max, string) {
    const regex = `(?<=${type}:)([^\\s]+)`;
    const match = string.match(new RegExp(regex));
    if (!match) {
        return false;
    }
    const fourDigits = parseInt(match[0], 10);
    return fourDigits >= min && fourDigits <= max;
}

function validateHeight(string) {
    const match = string.match(/hgt:(\d{2,3})(\w{2})/);
    if (!match) {
        return false;
    }
    const [full, height, unit] = match;
    return unit === 'cm' ? height >= 150 && height <= 193 : height >= 59 && height <= 76;
}

function validateHairColour(string) {
    const match = string.match(/(?<=hcl:#)([0-9a-f]+)/);
    return !!match && match[0].length === 6;
}

function validateEyeColour(string) {
    return !!string.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)/);
}

function validatePassportId(string) {
    const match = string.match(/(?<=pid:)(\d+)/);
    return !!match && match[0].length === 9;
}
