function ubahKapital(kalimat) {
  // you can only write your code here!
  let result = '';

  for (let i = 0; i < kalimat.length; i++) {
    if (i == 0) {
      result += kalimat[0].toUpperCase();
    } else if (kalimat[i-1] === ' ') {
      result += kalimat[i].toUpperCase();
    } else {
      result += kalimat[i];
    }
  }
  return result;
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun