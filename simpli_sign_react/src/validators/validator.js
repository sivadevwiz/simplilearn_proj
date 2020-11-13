const checkFirstNameRegexp = /^[A-Z\s-'`]{2,50}$/i;
const checkLastNameRegexp = /^[A-Z\s-'`]{2,100}$/i;
const checkEmailRegexp = /^([^<>()[\]\\.,;:\s@"](\.[^<>()[\]\\.,;:\s@"]+)*){1,64}@(([a-zA-Z\-0-9]{2,184}\.)+[a-zA-Z]{2,4})$/i;
// const checkPasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%£*\-?@_|^~:.])(?=.{8,})/;

const checkPasswordSmallCharRegexp = /^(?=.*[a-z])/;
const checkPasswordBigCharRegexp = /^(?=.*[A-Z])/;
const checkPasswordSymbolRegexp = /^(?=.*[!#$%@])/;
const checkPasswordLengthRegexp = /^(?=.{8,})/;

export const checkFirstName = (firstname) => {
    return firstname ? checkFirstNameRegexp.test(firstname) : false;
}

export const checkLastName = (lastname) => {
    return lastname ? checkLastNameRegexp.test(lastname) : false;
}

export const checkEmail = (email) => {
    return email ? checkEmailRegexp.test(email) : false;
}

export const checkPasswordSmallChar = (password) => {
    return password ? checkPasswordSmallCharRegexp.test(password) : false;
}
export const checkPasswordBig = (password) => {
    return password ? checkPasswordBigCharRegexp.test(password) : false;
}
export const checkPasswordSymbol = (password) => {
    return password ? checkPasswordSymbolRegexp.test(password) : false;
}
export const checkPasswordLength = (password) => {
    return password ? checkPasswordLengthRegexp.test(password) : false;
}
