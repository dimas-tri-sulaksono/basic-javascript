/** secara default bahasa pemrograman dieksekusi secara berurutan (synchronous) dari a-z dari 1-100
 *  asynchronous : teknik eksekusi kode secara pararel tanpa harus menunggu eksekusi program yang lain selesai
 * artinya fungsi yang dibuat menggunakn teknik asynchronous akan dijalankan bersamaan dengan kode lainnya
 */

console.log("=== pertama ==="); // dijalankan pertama

function fristFunction() {
  console.log("=== kedua ==="); // dijalankan kedua
}

console.log("=== ketiga ==="); // dijalankan ketiga

setTimeout(fristFunction, 3000); // tunda eksekusi selama 3 detik

function secondFunction() {
  console.log("=== keempat ==="); // dijalankan keempat
}

setTimeout(secondFunction, 3000); // tunda eksekusi selama 3 detik
