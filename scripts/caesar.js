function shiftChar(char, shift) {
  //Рус. Алфавит
  if (char >= 'А' && char <= 'Я') {
    let bigRus = ((char.charCodeAt(0) - 1040 + shift) % 32 + 32) % 32 + 1040
    return String.fromCharCode(bigRus)
  }

  else if (char >= 'а' && char <= 'я') {
    let littleRus = ((char.charCodeAt(0) - 1072 + shift) % 32 + 32) % 32 + 1072
    return String.fromCharCode(littleRus)
  }

  //Англ. Алфавит
  else if (char >= 'a' && char <= 'z') {
    let littleEn = ((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97
    return String.fromCharCode(littleEn)
  }
  else if (char >= 'A' && char <= 'Z') {
    let bigEn = ((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65
    return String.fromCharCode(bigEn)
  }
  else {
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
