const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('')

    message = [...message.toUpperCase()]
    key = [...key.toUpperCase()]
    let i = 0

    let array = message.map(el => {
      const elChar = el.charCodeAt()
      return elChar >= 65 && elChar <= 90
          ? String.fromCharCode(((elChar - 65 + key[i++ % key.length].charCodeAt() - 65) % 26) + 65)
          : el
    })

    return this.type ? array.join('') : array.reverse().join('')
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('')

    message = [...message.toUpperCase()]
    key = [...key.toUpperCase()]
    let i = 0

    let array = message.map(el => {
      const elChar = el.charCodeAt();
      return elChar >= 65 && elChar <= 90
          ? String.fromCharCode((elChar - 65 - (key[i++ % key.length].charCodeAt() - 65) + 26) % 26 + 65)
          : el;
    })

    return this.type ? array.join('') : array.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
