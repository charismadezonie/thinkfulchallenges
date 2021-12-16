/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  let groups = new Map();
  
  words.forEach((word) => {
    const anagram = Array.from(word.split(''))
      .sort()
      .join('')
      .toLowerCase();
    
    if (groups.has(anagram)) {
      groups.get(anagram).push(word)
    }else {
      groups.set(anagram, [word])
    }
  });
  let resultArray = Array.from(groups.values());
  return resultArray;
}

module.exports = anagramGroups;
