const UppercaseRegex = /[A-Z]/;
const LowercaseRegex = /[a-z]/;
//eslint-disable-next-line
const specialCharactersRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const alphabetRegex = /[a-zA-Z]/g;
const combineUppercaseNLowercaseValidator = (password: string) =>
    LowercaseRegex.test(password) && UppercaseRegex.test(password);

const checkPasswordHasLetters = (password: string) =>
    alphabetRegex.test(password);

const checkPasswordSpecialCharacter = (password: string) =>
    specialCharactersRegex.test(password);

const checkPasswordLength = (password: string) => password.length > 7;

const AddEmail = (message: string, email: string) =>
    message.replace("/EmailTag", email);

export {
    AddEmail,
    alphabetRegex,
    checkPasswordLength,
    specialCharactersRegex,
    checkPasswordHasLetters,
    checkPasswordSpecialCharacter,
    combineUppercaseNLowercaseValidator,
};
