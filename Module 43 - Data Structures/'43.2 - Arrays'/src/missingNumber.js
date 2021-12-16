/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  for (let i = 1; i<=numbers.length+1; i++) {
    if (!numbers.includes(i)) {
      return i
    } 
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  const expectedLength = numbers.length+1
  const expectedSum = (expectedLength*(expectedLength+1))/2
  
  let actualSum = 0
  for (let i=0; i<numbers.length; i++) {
    actualSum += numbers[i]
  }
  
  return (expectedSum - actualSum)
}

module.exports = { missingNumberBruteForce, missingNumberSum };
