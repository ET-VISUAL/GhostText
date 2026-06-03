import { caesarEncrypt, caesarDecrypt } from './caesar.js'
import { atbashEncrypt, atbashDecrypt } from './atbash.js'

let textInput = document.querySelector('#text-input')
let cipherSelect = document.querySelector('#cipher-choice')
let shiftOption = document.querySelector('#shift-option')
let shiftInput = document.querySelector('#shift-input')

function getCurrentCipher() {
  return cipherSelect.value
}
// Здесь реализована логика кнопок. В зависимости какой шифр был выбран идет нужная логика
document.querySelector('#encrypt-btn').onclick = () => { // кнопка для шифровки
  let buttonValue = textInput.value
  let cipher = getCurrentCipher()
  let result

  if (cipher === 'caesar') {
    let shift = parseInt(shiftInput.value) || 3
    result = caesarEncrypt(buttonValue, shift)
  }
  else if (cipher === 'atbash') {
    result = atbashEncrypt(buttonValue)
  }
  else {
    result = 'Данного шифра нет в списке.'
  }
  document.querySelector('#result-input').value = result
  textInput.value = result
  saveToLocalStorage()
}

document.querySelector('#decrypted-btn').onclick = () => { // кнопка для расшифровки соответственно
  let buttonValue = textInput.value
  let cipher = getCurrentCipher()
  let result

  if (cipher === 'caesar') {
    let shift = parseInt(shiftInput.value) || 3
    result = caesarDecrypt(buttonValue, shift)
  }
  else if (cipher === 'atbash') {
    result = atbashDecrypt(buttonValue)
  }
  else {
    result = 'Данного шифра нет в списке.'
  }
  document.querySelector('#result-input').value = result
  textInput.value = result
  saveToLocalStorage()
}

document.querySelector('#copy-text').onclick = () => {
  let resultField = document.querySelector('#result-input')
  resultField.select()
  document.execCommand('copy')
  alert('Результат шифрования скопирован!')
}

function saveToLocalStorage() {
  const data = {
    text: textInput.value,
    result: document.querySelector('#result-input').value,
    cipher: cipherSelect.value,
    shift: shiftInput.value
  }
  localStorage.setItem('ghostTextData', JSON.stringify(data))
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('ghostTextData')
  if (saved) {
    const data = JSON.parse(saved)
    textInput.value = data.text || ''
    document.querySelector('#result-input').value = data.result || ''
    cipherSelect.value = data.cipher || 'caesar'
    shiftInput.value = data.shift || 3
    toggleShiftInput()
  }
}
loadFromLocalStorage()

// Функция для отображения блока со сдвигом если используется шифр цезаря
function toggleShiftInput() {
  if (cipherSelect.value === 'caesar') {
    shiftOption.style.display = 'block'
  }
  else {
    shiftOption.style.display = 'none'
  }
}
// метод addEventListener используется для действий пользователя (клик мышки и тд.) и выполнении кода при каком то условии
cipherSelect.addEventListener('change', () => {
  saveToLocalStorage()
  toggleShiftInput()
})

shiftInput.addEventListener('input, saveToLocalStorage')
textInput.addEventListener('input', saveToLocalStorage)

toggleShiftInput()
