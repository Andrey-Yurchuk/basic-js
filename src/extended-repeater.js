const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (options === undefined) {
    options = {};
  }
  
  const strValue = String(str);
  const additionValue = options.addition !== undefined ? String(options.addition) : '';
  const separator = options.separator !== undefined ? options.separator : '+';
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let additionStr = '';
  if (additionValue) {
    const additionParts = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionParts.push(additionValue);
    }
    additionStr = additionParts.join(additionSeparator);
  }
  
  const parts = [];
  for (let i = 0; i < repeatTimes; i++) {
    parts.push(strValue + additionStr);
  }
  
  return parts.join(separator);
}

module.exports = {
  repeater
};
