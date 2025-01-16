// modul untuk input ke terminal
const r = require("readline");

// untuk interface/tampilan untuk input ke terminal
const inputNama = r.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// panggil inputannya
// .question : untuk menampilkan pertanyaan ke user
inputNama.question("masukkan nama: ", (nama) => {
  console.log(`hallo ${nama}`); // menampilkan output
  inputNama.close(); // menutup input
});
