import { encrypt, decrypt } from "./caesar.js";

let textInput = document.querySelector('#text-input')

document.querySelector('#encrypt-btn').onclick = () => { //кнопка для шифровки
    let buttonValue = textInput.value
    let encrypted = encrypt(buttonValue)
    document.querySelector('#out').textContent = encrypted
}

document.querySelector('#decrypted-btn').onclick = () => { //кнопка для расшифровки соответственно
    let buttonValue = textInput.value
    let encryptedText = document.querySelector('#out').textContent
    let decrypted = decrypt(encryptedText)
    document.querySelector('#out').textContent = decrypted
}