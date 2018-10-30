function checkAB(num) {
  // you can only write your code here!
  let aIndex = num.indexOf('a');
  let bIndex = num.indexOf('b', aIndex);
  
  return bIndex == -1 ? false : bIndex - aIndex > 1 ? true : false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false