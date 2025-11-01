const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    message = String(message).toUpperCase();
    key = String(key).toUpperCase();
    
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (char >= 'A' && char <= 'Z') {
        const messageCode = char.charCodeAt(0) - 65;
        const keyChar = key[keyIndex % key.length];
        const keyCode = keyChar.charCodeAt(0) - 65;
        
        const encryptedCode = (messageCode + keyCode) % 26;
        result += String.fromCharCode(encryptedCode + 65);
        
        keyIndex++;
      } else {
        result += char;
      }
    }
    
    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    
    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    let message = String(encryptedMessage).toUpperCase();
    key = String(key).toUpperCase();
    
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (char >= 'A' && char <= 'Z') {
        const encryptedCode = char.charCodeAt(0) - 65;
        const keyChar = key[keyIndex % key.length];
        const keyCode = keyChar.charCodeAt(0) - 65;
        
        const decryptedCode = (encryptedCode - keyCode + 26) % 26;
        result += String.fromCharCode(decryptedCode + 65);
        
        keyIndex++;
      } else {
        result += char;
      }
    }
    
    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    
    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
