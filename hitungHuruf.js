function hitungHuruf(kata) {
  // you can only write your code here!
  let splitter = kata.split(' ');
  let count = [];
  let letter = '';

  for (let i = 0; i < splitter.length; i++) {
    count.push(0);
    letter = '';
    for (let j = 0; j < splitter[i].length; j++) {
      for (let k = j+1; k < splitter[i].length; k++) {
        if (splitter[i][j] === splitter[i][k] && splitter[i][j] != letter) {
          letter = splitter[i][j];
          count[i]++;
        }
      }
    }
    
  }

  let biggest = 0;

  for (let i = 0; i < count.length; i++) {
    if (count[i] > biggest) {
      biggest = i;
    }
  }

  return splitter[biggest];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau