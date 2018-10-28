function digitPerkalianMinimum(angka) {
   // you can only write your code here!
   let angkaNow = angka;
   let faktorNow = 1;
   
   for (let i = 1; i <= 5; i++) {
      if (angka % i == 0) {
         angkaNow = angka / i;
         faktorNow = i;
      }
   }

   return (String(angkaNow) + ' ' + String(faktorNow)).length - 1;
 }
 
 // TEST CASES
 console.log(digitPerkalianMinimum(24)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2