let textInput = document.querySelector('#text-input')
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
    'z' : 'c',
    ' ': '0'
}

document.querySelector('button').onclick = () => {
    let str = textInput.value
    let str2 = ''

    for (let i = 0; i < str.length; i++) {
        console.log(key[str[i]])
        if (key[str[i]]) {
            str2 += key[str[i]]
        }
        else {
            str2 += str[i]
        }
    }
    document.querySelector('#out').textContent = str2
}