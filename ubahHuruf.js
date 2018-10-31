function ubahHuruf(kata) {
  // you can only write your code here!
  let result = '';

  for (let i = 0; i < kata.length; i++) {
    result += String.fromCharCode(kata[i].charCodeAt() + 1);
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu