/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  for (let item in cart) {
    total += cart[item].priceInCents * cart[item].quantity;
  }
  return total;
}

function printCartInventory(cart) {
  let inventoryArr = [];
  for (let item in cart) {
    inventoryArr.push(`${cart[item].quantity}x${item}`);
  }
  return inventoryArr.join('\n');
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
