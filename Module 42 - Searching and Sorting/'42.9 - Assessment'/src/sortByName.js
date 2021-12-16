const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function compare(a, b) {
  if (a === b) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
}

function sortByName(customers) {
  let result = [];
  let lastFirst = customers.map((customer) => {
    return customer.lastName + customer.firstName;
  });

  const sortByLastName = sort(compare, lastFirst);

  sortByLastName.forEach((name) => {
    let lastName = name.slice(0, 1);
    let firstName = name.slice(1);
    let finalName = { firstName, lastName };

    result.push(finalName);
  });
  return result;
}

module.exports = sortByName;
