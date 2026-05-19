export function atbashEncrypt(someValue) {
    let result = ''
    for (let i = 0; i < someValue.length; i++) {
        let char = someValue[i]
        if (char >= 'a' && char <= 'z') {
            //строчные буквы
            result += String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)))
        } else {
            result += char
        }
    }
    return result
}
//Атбаш обратим так что расшифровка будет та же функция
export const atbashDecrypt = atbashEncrypt