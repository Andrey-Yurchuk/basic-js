const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};
  
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    count1[char] = (count1[char] || 0) + 1;
  }
  
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    count2[char] = (count2[char] || 0) + 1;
  }
  
  let common = 0;
  for (const char in count1) {
    if (count2[char]) {
      common += Math.min(count1[char], count2[char]);
    }
  }
  
  return common;
}

module.exports = {
  getCommonCharacterCount
};
