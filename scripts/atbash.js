export function atbashEncrypt(someValue) {
  let bigRus = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
  let littleRus = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'
  let bigEn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let littleEn = 'abcdefghijklmnopqrstuvwxyz'

  let result = ''
  for (let i = 0; i < someValue.length; i++) {
    let char = someValue[i]
    if (bigRus.includes(char)) {
      let newIndex = bigRus.length - 1 - bigRus.indexOf(char)
      result += bigRus[newIndex]
    }
    else if (littleRus.includes(char)) {
      let newIndex = littleRus.length - 1 - littleRus.indexOf(char)
      result += littleRus[newIndex]
    }
    else if (littleEn.includes(char)) {
      let newIndex = littleEn.length - 1 - littleEn.indexOf(char)
      result += littleEn[newIndex]
    }
    else if (bigEn.includes(char)) {
      let newIndex = bigEn.length - 1 - bigEn.indexOf(char)
      result += bigEn[newIndex]
    }
    else {
      result += char
    }
  }
  return result
}
// Атбаш обратим так что расшифровка будет та же функция
export const atbashDecrypt = atbashEncrypt
