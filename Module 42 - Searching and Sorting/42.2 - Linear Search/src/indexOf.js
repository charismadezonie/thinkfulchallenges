function indexOf(isMatch, elements) {
  if (Array.isArray(elements)) {
    for (let i = 0, length = elements.length; i < length; i++) {
      if (isMatch(elements[i], i, elements)) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = indexOf;
