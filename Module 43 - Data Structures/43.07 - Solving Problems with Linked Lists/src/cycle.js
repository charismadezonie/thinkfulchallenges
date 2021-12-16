const cycle = (list) => {
  let pointer1
  let pointer2
  
  if (!list.head || !list.head.next) {
    return false
  } else {
    pointer1 = list.head;
    pointer2 = list.head;
  }
  
  while (pointer1 && pointer2 && pointer2.next) {
      pointer1 = pointer1.next
      pointer2 = pointer2.next.next
    if (pointer1 == pointer2) {
      return true
    } 
  }
  
  return false
};

module.exports = cycle;
