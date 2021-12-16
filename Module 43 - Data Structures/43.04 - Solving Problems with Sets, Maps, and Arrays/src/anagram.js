/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  
  if (s1.length !== s2.length) {
    return false
  } 
  
  let s1Array = s1.split('').sort().join('').toLowerCase();
  let s2Array = s2.split('').sort().join('').toLowerCase();
  
  return s1Array === s2Array ? true : false
}

module.exports = anagram;
