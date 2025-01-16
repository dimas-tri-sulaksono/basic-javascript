const fs = require("fs");

const readEmployee() = fs.readFileSync(
  "./employee.json",
  "utf-8",
  (err, getData) => {
    if (err) {
      console.log(err);
      return err;
    }
    try {
      const emp = JSON.parse(getData);
      return emp;   
    } catch (error) {
      console.log(error);
    }
  }
);
// console.log(readEmployee);

/** soal 1:
 * buat perintah untuk membaca file JSON bernama employee.json yang berisi data json dan tampilkan semua nama karyawan
 */
// fs.readFile("./employee.json", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   try {
//     const jsonData = JSON.parse(data);
//     const names = jsonData.map((item) => item.nama);

//     console.log("nama :", names);
//   } catch (error) {
//     console.log(error);
//   }
// });

const empNames = readEmployee().map((item) => item.name);
console.log(empNames);

/** soal 2:
 * buat perintah untuk nambahin minimal 1 data json ke dalam file bernama employee.json (gunakan readFile & replace pakai writeFile)
 */

// const dataBaru = {
//   id: 6,
//   nama: "Dimas",
//   age: 27,
//   jobdesk: [
//     {
//       title: "frontend",
//       salary: 22000000,
//     },
//   ],
//   hobby: ["membaca", "menulis", "gaming"],
// };

// fs.readFile("./employee.json", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   try {
//     console.log("baca data :\n", data);
//     const jsonData = JSON.parse(data);
//     jsonData.push(dataBaru);

//     fs.writeFile(
//       "./employee.json",
//       JSON.stringify(jsonData, null, 5),
//       "utf-8",
//       (error) => {
//         if (error) {
//           console.log(error);
//           return error;
//         }
//       }
//     );
//     console.log("\nberhasil menambahkan data baru");
//   } catch (error) {}
// });

// setTimeout(lihat, 1000); //
// function lihat() {
//   fs.readFile("./employee.json", "utf-8", (error, data) => {
//     if (error) {
//       console.log(error);
//       return error;
//     }
//     console.log("\ntampilan setelah menambahkan baru :\n", data);
//   });
// }

/** soal 3:
 * buat perintah untuk mencari karyawan yang usianya di atas atau sama dengan 26 tahun dan simpan datanya ke dalam file baru bernama karyawan_tuwir.json
 *  (gunakan readFile & writeFile)
 */

// function karyawanTua() {
//   fs.readFile("./employee.json", "utf-8", (error, data) => {
//     if (error) {
//       console.log(error);
//       return error;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       const filteredData = jsonData.filter((item) => item.age >= 26);

//       fs.writeFile(
//         "./karyawan_tuwir.json",
//         JSON.stringify(filteredData, null, 2),
//         "utf-8",
//         (error) => {
//           if (error) {
//             console.log(error);
//             return error;
//           }
//           console.log("file karyawan_tuwir.json berhasil dibuat");
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }

// setTimeout(karyawanTua, 1000);

/** soal 4:
 * buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahan datanya di file baru bernama delete_data
 * (gunakan readFile & writeFile)
 */

// fs.readFile("./employee.json", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   try {
//     const jsonData = JSON.parse(data);
//     const updatedData = jsonData.filter((item) => item.id !== 1);

//     fs.writeFile(
//       "./delete_data.json",
//       JSON.stringify(updatedData, null, 2),
//       "utf-8",
//       (error) => {
//         if (error) {
//           console.log(error);
//           return error;
//         }
//         console.log("file delete_data.json berhasil dibuat");
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });

// JSON parse : untuk mengubah array of object jadi JSON
// JSON.stringify : untuk mengubah data json ke string

// baca file employee.json kemudian masukkan kedalam variable untuk digunakan atau dipanggil lagi nanti
