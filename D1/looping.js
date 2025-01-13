// looping : perulangan yang bertujuan untuk memeriksa data untuk kondisi tertentu
// while loop
let startCondition = 1;
while (startCondition < 5) {
  console.log("while loop ke-", startCondition); //output
  startCondition++; // increment : menambahkan 1 ke nilai startcondition hingga memenuhi kondisi
}

// for loop
// let i = : kondisi awal perulangan
// i < 5 : stop condition
// i++ : increment
for (let i = 0; i < 5; i++) {
  console.log("for loop ke-", i);
}

// for loop yang lebih simple
let array = [1, 2, 3, 4, 5];
for (let i of array) {
  console.log("loop ke-", i);
}

let hitung = 0;
let i = 0;
//contoh lain while
while (i < array.length) {
  if (array[i] > 3) {
    hitung++;
  }
  i++;
}
console.log(`jumlah elemen yang lebih besar dari 3 : ${hitung}`);
// menampilkan jumlah data dari array yang nilainya lebih dari 3 (karena nilai dalam array isinya 1-5, maka yang lebih besar dari 3 cuma 2 angka [4 dan 5], jika diisi 1-7, maka yang hasilnya 4 [4, 5, 6, 7])

// contoh while untuk mencari bilangan prima
let n = 20; //cari bilangan prima dari 1 - 20
let prima = 2; //nilai terkecil bilangan prima

while (prima <= n) {
  let isPrime = true;
  let j = 2;

  while (j < prima) {
    // selama nilai j kurang dari prima, eksekusi blok di bawah ini
    if (prima % j === 0) {
      // jika prima dapat dibagi j, maka prima (angka) bukan bilangan prima
      isPrime = false; // ubah nilai isPrime menjadi false
      break; // keluar/hentikan while loop
    }
    j++;
  }
  if (isPrime) {
    // jika isPrime true, maka prima (angka) adalah bilangan prima
    console.log(prima);
  }
  prima++;
}

// for each : perulangan khusus data array. foreach sendiri merupakan method bawaan dari array (array method)
array.forEach(i) => {
    
});
