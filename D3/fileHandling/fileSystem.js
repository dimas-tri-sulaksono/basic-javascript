/** di nodejs, ada modul-modul yang berfungsi untuk file handling
 *  salah satunya modul fs (file system) : untuk membuat/membaca file
 *   */

// import modulnya
const fs = require("fs");

// create : menulis file menggunakan .writeFile("filePath", "isi file", "encoding", return)
fs.writeFile(
  "./textFile.txt",
  "halo, aku adalah seorang programmer",
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("file berhasil disimpan");
  }
);

// .appendFile("filePath", "isi", encoding, return)
let dataDariAPI = " yang jago";
fs.appendFile("./textFile.txt", dataDariAPI, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("file berhasil diedit");
});

// .readfile("filePath", encoding, return) : untuk membaca file
fs.readFile("./textFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data bisa dibaca :", data);
});

// .unlink("filePath, return") : untuk menghapus file
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("file berhasil dihapus!");
});
