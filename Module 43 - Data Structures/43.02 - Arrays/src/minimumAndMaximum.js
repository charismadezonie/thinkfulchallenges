/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  let result = [];
  let sorted = numbers.sort(function(a,b){return a - b});
  return sorted.length > 0 ? [sorted[0], sorted[sorted.length-1]] : []
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length < 2) return numbers
  let smallest = Infinity
  let largest = -Infinity
  
  for (let i=0;i<=numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    } else if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }
  return [smallest, largest]
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
