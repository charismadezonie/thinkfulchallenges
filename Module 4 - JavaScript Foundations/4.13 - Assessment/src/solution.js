/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let result = null;
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].name === name &&
      products[i].availableSizes.includes(size)
    ) {
      result = products[i];
    }
  }
  return result;
}

function addProductToCart({ name, priceInCents }, cart = {}) {
  if (!cart[name]) {
    cart[name] = { priceInCents, quantity: 1 };
  } else {
    cart[name].quantity++;
  }
  return cart;
}

function calculateTotal(cart) {
  let total = 0;
  for (let item in cart) {
    total += cart[item].priceInCents * cart[item].quantity;
  }
  return total;
}

function printReceipt(cart) {
  const grandTotal = calculateTotal(cart);
  if (grandTotal === 0) return null;
  let finalStr = "";
  for (let item in cart) {
    let itemTotal = printablePrice(
      cart[item].priceInCents * cart[item].quantity
    );
    finalStr += `${cart[item].quantity}x${item} - ${itemTotal}\n`;
  }
  return finalStr + "Total: " + printablePrice(grandTotal);
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
