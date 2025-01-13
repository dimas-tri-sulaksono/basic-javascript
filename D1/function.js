// function : blok kode javascript yang mengerjakan perintah/fungsi tertentu
// rumus
// fungsi biasa: function namaFunction (params/no-params) {}
// arrow function: const namaFunction = (params/no-params) => {}

// contoh fungsi tanpa parameter
function printName() {
  console.log("Dimas");
}
printName(); // <- fungsi dipanggil/dijalankan

// contoh fungsi dengan parameter
// parameter : sebutan variable yang didefinisikan di dalam fungsi
// fungsi biasanya punya return buat mengembalikan nilai dari hasil fungsi tersebut
function penjumlahan(a, b) {
  let jumlah = a + b;
  return jumlah;
}
console.log(penjumlahan(2, 10));

// return juga bisa untuk memberhentikan eksekusi program awal jika diperlukan
function cekAngkaPositif(angka) {
  if (angka < 0) {
    return "angka negatif";
  }
  return "angka positif";
}
console.log(cekAngkaPositif(5));
console.log(cekAngkaPositif(-12));

// arrow function
const kaliDua = (a) => {
  return a * 2;
};
console.log(kaliDua(5));
