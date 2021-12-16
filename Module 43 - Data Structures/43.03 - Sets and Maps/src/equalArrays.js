/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  let equal = true
  
  for (let i=0; i<a1.length; i++) {
    if (a1.sort()[i] !== a2.sort()[i]) equal = false
  }
  
  return equal
}

module.exports = isEqual;
