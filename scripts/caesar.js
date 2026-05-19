function shiftChar(char, shift) {
    if (char >= 'a' && char <= 'z') {
        let newCode = ((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97
        return String.fromCharCode(newCode)
    } else if (char >= 'A' && char <= 'Z') {
        let newCode = ((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65
        return String.fromCharCode(newCode)
    } else {
        return char
    }
}

export function caesarEncrypt(someValue, shift) {
    let resultEncrypted = ''
    for (let i = 0; i < someValue.length; i++) {
        resultEncrypted += shiftChar(someValue[i], shift)
    }
    return resultEncrypted
}

export function caesarDecrypt(someValue, shift) {
    return caesarEncrypt(someValue, -shift)
}
