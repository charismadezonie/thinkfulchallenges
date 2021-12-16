/**
 * return the union of two sets
 */
function union(s1, s2) {
  const result = new Set();
  s1.forEach((element) => result.add(element))
  s2.forEach((element) => result.add(element))
  return result
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  const result = new Set();
  s1.forEach((element) => {
    if (s2.has(element)) result.add(element)
  })
  return result
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  const result = new Set();
  s1.forEach((element) => {
    if (!s2.has(element)) result.add(element)
  })
  return result
}

module.exports = { union, intersect, difference };
