const key = {
    'a' : 'd',
    'b' : 'e',
    'c' : 'f',
    'd' : 'g',
    'e' : 'h',
    'f' : 'i',
    'g' : 'j',
    'h' : 'k',
    'i' : 'l',
    'j' : 'm',
    'k' : 'n',
    'l' : 'o',
    'm' : 'p',
    'n' : 'q',
    'o' : 'r',
    'p' : 's',
    'q' : 't',
    'r' : 'u',
    's' : 'v',
    't' : 'w',
    'u' : 'x',
    'v' : 'y',
    'w' : 'z',
    'x' : 'a',
    'y' : 'b',
    'z' : 'c'
}
//обратный ключ для расшифровки
const reverseKey = {}
for (let char in key) {
    reverseKey[key[char]] = char
}

export function encrypt (someValue) {
    let resultEncrypted = ''
    for (let i = 0; i < someValue.length; i++) {
        if (key[someValue[i]]) {
            resultEncrypted += key[someValue[i]]
        } else {
            resultEncrypted += someValue[i]
        }
    }
    return resultEncrypted
}

export function decrypt (someValue) {
    let resultDecrypted = ''
    for (let i = 0; i < someValue.length; i++) {
        if (reverseKey[someValue[i]]) {
            resultDecrypted += reverseKey[someValue[i]]
        } else {
            resultDecrypted += someValue[i]
        }
    }
    return resultDecrypted
}
