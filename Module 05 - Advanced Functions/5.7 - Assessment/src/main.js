/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks, users, username) {
  return parks.filter((park) => users[username].wishlist.includes(park.id));
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  return getParksByState(parks, state).every((element) =>
    users[username].visited.includes(element.id)
  );
}

function userHasVisitedParkOnWishlist(users, user1, user2) {
  return users[user1].visited.some((element) =>
    users[user2].wishlist.includes(element)
  );
}

function getUsersForUserWishlist(users, username) {
  const result = [];
  for (let user in users) {
    if (
      users[username].wishlist.some((element) =>
        users[user].visited.includes(element)
      )
    ) {
      result.push(user);
    }
  }
  return result;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
