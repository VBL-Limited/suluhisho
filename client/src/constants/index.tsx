import {
    checkPasswordLength,
    checkPasswordSpecialCharacter,
    combineUppercaseNLowercaseValidator,
} from "../utils";

const PasswordRules = [
    {
        id: 1,
        idLabel: "checkLength",
        label: "8 characters minimum",
        validator: checkPasswordLength,
    },
    {
        id: 2,
        idLabel: "checkSpecialCaracter",
        label: "At least one special character",
        validator: checkPasswordSpecialCharacter,
    },
    {
        id: 3,
        idLabel: "checkLowerCaseNUppercase",
        label: "Upper & lowercase letters ",
        validator: combineUppercaseNLowercaseValidator,
    },
];

export { PasswordRules };
