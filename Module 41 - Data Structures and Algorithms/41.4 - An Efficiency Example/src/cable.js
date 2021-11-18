/**
 The cable problem
 Implement algorithm 1 here
*/

exports.cable1 = (currentLength, requiredLength, saleLength) => {
  let count = 0;
  let i = currentLength;
  while (i < requiredLength) {
    i += saleLength;
    count++;
  }
  return count;
};

/**
 The cable problem
 Implement algorithm 2 here
*/

exports.cable2 = (currentLength, requiredLength, saleLength) => {
  const distance = requiredLength - currentLength;
  let total = Math.round(distance / saleLength);
  return total;
};
