/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    for (let j = 0; j < item.availableSizes.length; j++) {
      if (item.availableSizes[j] === size) {
        result.push(item);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return products.length > 3;
}

function checkForSizeByName(products, name, size) {
  let product = null;
  if (!products) return false;
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    if (item.name === name) {
      product = item;
    }
  }

  if (product) {
    return product.availableSizes.includes(size);
  } else {
    return false;
  }
}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
