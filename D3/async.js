/** secara default bahasa pemrograman dieksekusi secara berurutan (synchronous) dari a-z dari 1-100
 *  asynchronous : teknik eksekusi kode secara pararel tanpa harus menunggu eksekusi program yang lain selesai
 * artinya fungsi yang dibuat menggunakn teknik asynchronous akan dijalankan bersamaan dengan kode lainnya
 */

// fungsi biasa
function getDataFromServer() {
  // promise adalah sebuah object yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    // let data = { id: 1, name: "danu", job: "fullstack" };
    let data;

    if (data) {
      resolve(data); // resolve : untuk mengembalikan data yang berhasil ditangkap
    } else {
      reject("data tidak ada"); // reject : mengembalikan error jika data gagal diambil
    }
  });
}
// console.log(getDataFromServer());

async function fetchData() {
  // blok try catch : error handling untuk menangani error jika data gagal diambil
  try {
    // await : kata kunci dalam async untuk menangani error jika data gagal diambil
    const getData = await getDataFromServer();
    console.log("data yang diterima :", getData);
  } catch (error) {
    // parameter error : error yang akan ditampilkan jika terjadi kegagalan
    console.log("terjadi kesalahan saat mengambil data");
  }
}
// fetchData();

// contoh lain : ambil dari fake API
async function fetchUserData(userId) {
  try {
    console.log("ceritanya lagi ambil data dari api");

    // tampung data yang diambil di var response
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    // console.log(response); // tampilan mentah

    // error handling menggunakan throw exception untuk mengecek apakah response sudah sesuai (kode 200 - 500+)
    // check apakah statusnya ok/success kode 200
    if (response.ok !== 200) {
      throw new Error(
        `HTTP error! status : ${response.status} ${response.statusText}`
      );
    }

    // konversi responsenya ke format JSON
    let user = await response.json();

    // tampil datanya
    console.log("data user by id :", user);
  } catch (error) {
    // tampil error
    console.log("error :", error);
    // throw error;
  }
}
fetchUserData(30);
