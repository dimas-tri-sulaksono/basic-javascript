/** promise : object yang mewakili hasil dari operasi async */
function dataFromServer() {
  return new Promise(function (resolve, reject) {
    // let data = [1, 2, 3, 4];
    let data;
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ada!");
    }
  });
}
// console.log(dataFromServer());

// fungsi result : function yang dieksekusi dengan nilai yang dikasih dari resolve promise berhasil
// .then untuk menangani hasil ketika promise terpenuhi/data berhasil diambil
// .catch untuk menampilkan error ketika promise gagal mengambil data
dataFromServer()
  .then((result) => {
    console.log("get data :", result);
  })
  .catch((err) => {
    console.log("gagal :", err);
  });

//==========================================================================

console.log("=== pararel promise ==="); // memanggil beberapa API sekaligus
// data pertama
const getFristData = () => {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
};

// data kedua
const getSecondData = () => {
  return new Promise((resolve, reject) => {
    let data = "data ke 2";
    // let data; // jika data dibuat undifined maka akan mempengaruhi promise yang lain
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ditemukan!");
    }
  });
};

// ambil semua data sekaligus
function getAllData() {
  // promise.all : untuk menjalankan pemanggilan beberapa API sekaligus
  return Promise.all([getFristData(), getSecondData()]);
}

getAllData()
  .then((result) => {
    console.log("all data :", result); // result jika samu data berhasil dipanggil
  })
  .catch((err) => {
    console.log("error data :", err); // error kalau ada salah satu aja yang error (error satu, error semu)
  });
