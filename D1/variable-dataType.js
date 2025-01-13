// variable: tempat penyimpanan data

// let
let nama = "dimas";

const umur = 20;

// tipe data : jenis data yang bisa disimpan dalam variable

// string : data yang dibungkus kutip
let namaKaryawan = "Dimas";
console.log("nama karyawan : ", namaKaryawan);

// int : tipe data khusus angka
const salary = 3000000000;
console.log("gaji : ", salary);

// bolean : tipe data yang mengandung nilai benar atau salah
let isMarried = true;
console.log("apakah sudah menikah : ", isMarried);

let isTeacher = true;

// null : tipe data yang nilainya kosong
const hisDebt = null;

// undefined :  tipe data yang nilainya tidak didefinisikan
let wife;
wife = "niniek";
console.log("istri : ", wife);

// variable let datanya bisa diubah, sedangkan valiable const datanya tetap (tidak bisa diubah)
// aturan penulisan variable wajib menggunakan camelCase

// tipe data non primitif : tipe data yang nilainya kompleks

// object : tipe data kompleks yang menyimpan kumpulan data dengan nilai dan tipe data yang berbeda
let karyawan = {
  nama: "Dimas",
  salary: 300000000,
  job: "Backend",
};
console.log(karyawan.job); //gunakan . (titik) untuk mengakses data dari dalam object

// array : tipe data yang menyimpan banyak data
let daftar = ["Dimas", "Niniek", "Abyaz", "Wada"];
let daftar2 = ["Dimas", "Niniek", "Abyaz", "Wada", 123]; // di dalam array kita juga bisa menyimpan beragam data dengan tipe data berbeda
console.log("list :", daftar[0]); //gunakan index untuk mengambil data dari dalam array

// array juga bisa digunakan untuk menyimpan object
let daftarKaryawan = [
  { nama: "Dimas", umur: 20 },
  { nama: "Niniek", umur: 20 },
];

console.log(daftarKaryawan);
console.log(daftarKaryawan[0].nama);

/