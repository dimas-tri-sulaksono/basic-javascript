// soal 1, buat operasi matematika dengan output seperti di bawah ini
let a, b, c;
(a = 10), (b = 20), (c = 30);

let tambah = a + b + c;
let kurang = a - b - c;
let kali = a * b * c;
let bagi = a / b / c;
let modulus = (a % b) % c;
let hitung = a + (b * c) / a;
console.log("====================DIMAS========================");
console.log("\nsoal 1 :");
console.log("X = ", a);
console.log("Y = ", b);
console.log("Z = ", c);
console.log("Penjumlahan = ", tambah);
console.log("Pengurangan = ", kurang);
console.log("Perkalian = ", kali);
console.log("Pembagian = ", bagi);
console.log("Modulus = ", modulus);
console.log("Jumlah-kali-bagi = ", hitung);
console.log("Total = ", tambah + kurang + kali + bagi + modulus);
console.log("\n=================================================");

// soal 2 : hitung berapa detik dalam 30 hari menggunakan operator matematika
console.log("\nsoal 2 :");
let detik = 30 * 24 * 60 * 60;
console.log("jumlah detik dalam 30 hari adalah", detik);
console.log("\n=================================================");

/*  soal 3 : cari hobby di dalam data yang dikirim dari parameter user
    jika object user atau properti hobby tidak ditemukan maka return "hobby tidak ada" */
console.log("\nsoal 3 :");
let user1 = {
  nama: "owi kun",
  age: 25,
  hobby: ["membaca", "menulis"],
};

let user2 = {
  name: "mega chan",
  age: 25,
};

function findUserHobby(user) {
  let hobby = user && user.hobby;
  return hobby || "hobby tidak ada";
}

console.log("user 1 : ", findUserHobby(user1));
console.log("user 2 : ", findUserHobby(user2));
console.log("\n=================================================");

// logic
/* soal 4 : buat logic switch case untuk menampilkan nama hari dalam bahasa inggris berdasarkan input angka 1-7 jika angka yang dimasukkan di luar rentang tersebut, maka tampilkan pesan "input tidak valid"
 */
console.log("\nsoal 4 :");

let hari = 5; // nilai input yang akan dikirim ke switch case

switch (hari) {
  case 1: {
    console.log("monday");
    break; // menghentikan eksekusi ketika kondisi terpenuhi
  }
  case 2: {
    console.log("tuesday");
    break;
  }
  case 3: {
    console.log("wednesday");
    break;
  }
  case 4: {
    console.log("thursday");
    break;
  }
  case 5: {
    console.log("friday");
    break;
  }
  case 6: {
    console.log("saturday");
    break;
  }
  case 7: {
    console.log("sunday");
    break;
  }

  default: // kondisi jika semua switch tidak terpenuhi
    console.log("input tidak valid");
    break;
}

console.log("\n=================================================");

/** soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
 * jika nilai lebih dari atau sama dengan 80, maka statusnya "anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70, dan kurang dari 80, maka statusnya "lulus dengan baik",
 * jika nilai lebih dari atau sama dengan 60, dan kurang dari 70, maka statusnya "lulus",
 * jika nilai kurang dari 60, maka statusnya "tidak lulus"
 */

console.log("\nsoal 5 :");

let nilai = 80;

if (nilai >= 80) {
  console.log("anda lulus dengan sangat baik");
} else if (nilai >= 70 && nilai < 80) {
  console.log("lulus dengan baik");
} else if (nilai >= 60 && nilai < 70) {
  console.log("lulus");
} else {
  console.log("tidak lulus");
}

console.log("\n=================================================");

/* soal 6 : nested if
buat logic untuk menentukan niali rata-rata siswa dengan menghitung nilai rata-rata dari 3 mata pelajaran (MTK, Fisika, Kimia)
jika nilai yang dimasukkan tidak valid (di luar rentang 0-100), maka statusnya "nilai tidak valid"
jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya "selamat, anda lulus dengan baik"
jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan 60, maka statusnya "anda lulus"
jika nilai rata-rata lebih kecil dari 60, maka statusnya "anda tidak lulus"
*/

console.log("\nsoal 6 :");

let nilaiMTK = 80,
  nilaiFisika = 80,
  nilaiKimia = 80;
let nilaiRataRata = (nilaiMTK + nilaiFisika + nilaiKimia) / 3;
if (nilaiRataRata < 0 || nilaiRataRata > 100) {
  console.log("nilai tidak valid");
} else if (nilaiRataRata >= 80) {
  console.log("selamat, anda lulus dengan baik");
} else if (nilaiRataRata < 80 && nilaiRataRata >= 60) {
  console.log("anda lulus");
} else {
  console.log("anda tidak lulus");
}

console.log("\n=================================================");

/* soal 7 : buat logic untuk menentukan jenis bilangan (positif, negatif, atau nol)
dari nilai yang dimasukkan oleh user menggunaka ternary operator
output yang diharapkan : ("angka 7 adalah bilangan positif")
*/

console.log("\nsoal 7 :");

let angka = 17;
let jenisBilangan = angka == 0 ? "nol" : angka > 0 ? "positif" : "negatif";
console.log("angka", angka, "adalah bilangan", jenisBilangan);

console.log("\n=================================================");

/* soal 8 : nested if
buat program untuk menghitung total harga pembelian barang menggunakan nested if
jika total harga sama dengan 0, maka tampilkan pesan "harga tidak valid"
jika total pembelian melebihi atau sama dengan 1 juta, maka berikan diskon sebesar 10%
jika total pembelian melebihi atau sama dengan 500 ribu, maka diberikan diskon sebesar 5%
jika di bawah 500 ribu tidak diberikan diskon.
tampilkan pesan berikut:
"anda membeli <jumlahBarang> <namaBarang> dengan harga <hargaBarang> per-<namaBarang>, total harga sebelum diskon = <totalHarga>"
lalu cek, jika dapat diskon maka tampilkan "selamat! anda mendapat diskon sebesar <diskon>%. harga setelah diskon = <hargaSetelahDiskon>"
jika tidak dapat diskon, tampilkan pesan "Anda belum dapat diskon, harga total = <hargaSetelahDiskon>"
*/
console.log("\nsoal 8 :");

let namaBarang = "baby oil",
  hargaBarang = 15000,
  jumlahBarang = 1000;

let totalHarga = hargaBarang * jumlahBarang;

if (totalHarga == 0) {
  console.log("harga tidak valid");
} else if (totalHarga >= 1000000) {
  let diskon = 10;
  let hargaSetelahDiskon = totalHarga - totalHarga * (diskon / 100);
  console.log(
    "anda membeli",
    jumlahBarang,
    namaBarang,
    "dengan harga",
    hargaBarang,
    "per",
    namaBarang,
    "total harga sebelum diskon =",
    totalHarga
  );
  console.log(
    "selamat! anda mendapat diskon sebesar",
    diskon,
    "%. harga setelah diskon =",
    hargaSetelahDiskon
  );
} else if (totalHarga >= 500000) {
  let diskon = 5;
  let hargaSetelahDiskon = totalHarga - totalHarga * (diskon / 100);
  console.log(
    "anda membeli",
    jumlahBarang,
    namaBarang,
    "dengan harga",
    hargaBarang,
    "per",
    namaBarang,
    "total harga sebelum diskon =",
    totalHarga
  );
  console.log(
    "selamat! anda mendapat diskon sebesar",
    diskon,
    "%. harga setelah diskon =",
    hargaSetelahDiskon
  );
} else {
  let diskon = 0;
  let hargaSetelahDiskon = totalHarga - totalHarga * (diskon / 100);
  console.log("Anda belum dapat diskon, harga total =", hargaSetelahDiskon);
}

console.log("\n=================================================");

// loop
/** soal 9 : for loop
 * buat program untuk mencari bilangan prima dari 1 -25 menggunakan for loop
 */
console.log("\nsoal 9 :");
let n = 25;
let count = 0;

for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }

  if (count == 2) console.log(i);
  count = 0;
}

for (let i = 2; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log("Coba 9 :", i);
  }
}

console.log("\n=================================================");

/** soal 10 : for loop
 * buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
 */
console.log("\nsoal 10 :");
const dataBilanganBulat = [2, 4, 6, 8, 10];
let temp = 0;
for (let i of dataBilanganBulat) {
  temp += i;
}
console.log(temp / dataBilanganBulat.length);

console.log("\n=================================================");

/** soal 11 : for loop
 * buat function untuk menghitung jumlah huruf kapital pada sebuat string
 */
console.log("\nsoal 11 :");
let string1 = "Hello World";
let string2 = "Kiw, Gimana Kabarnya?";
let string3 = "JAVaScRipT";

function hitungHurufKapital(kata) {
  let hitung = 0;
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] >= "A" && kata[i] <= "Z") {
      hitung++;
    }
  }
  return hitung;
}
console.log(string1, ":", hitungHurufKapital(string1), "huruf kapital");
console.log(string2, ":", hitungHurufKapital(string2), "huruf kapital");
console.log(string3, ":", hitungHurufKapital(string3), "huruf kapital");

console.log("\n=================================================");

/** soal 12 : for loop
 * buat function untuk mencari nilai tertinggi dari sebuah array
 */
console.log("\nsoal 12 :");
const nilaiTertinggi = [1, 34, 21, 54, 6567, 98764, 23, 453];

const bubbleSort = (array) => {
  const arr = Array.from(array); // avoid side effects
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[arr.length - 1];
};
console.log("nilai tertinggi :", bubbleSort(nilaiTertinggi));

console.log("\n=================================================");
