// penjelasan array secara detail

let myArray = [1, 2, 3, 4, 5];

// cara akses data dalam array berdasarkan indeksnya
let nilaiPertama = myArray[0];
let nilaiKedua = myArray[1];
// dst

console.log("nilai pertama array: ", nilaiPertama);
console.log("nilai kedua array: ", nilaiKedua);

// cara mengubah data dalam array berdasarkan indeksnya
myArray[2] = 6;
console.log(`array setelah diubah : ${myArray}`);

// array method : metode yang digunakan untuk memanipulasi data dalam array
// .push method array untuk menambahkan data ke dalam array
myArray.push(7);
console.log("push : ", myArray);

// .shift method array untuk menghapus data pertama dalam array
myArray.shift();
console.log("shift : ", myArray);

// .unshift method array untuk menambahkan data di awal array
myArray.unshift(1, 2);
console.log("unshift : ", myArray);

//  .pop method array untuk menghapus data terakhir dalam array
let nilaiTerakhir = myArray.pop();
console.log("pop : ", nilaiTerakhir);
console.log("popped array : ", myArray);

// .splice method array untuk menyisipkan data ke dalam array
myArray.splice(2, 0, 3);
console.log("spliced array : ", myArray);

// .slice method array untuk mengambil data dari array
let slice = myArray.slice(3, 5);
console.log("slice : ", slice);

// .sort method array untuk mengurutkan data dalam array
myArray.sort();
console.log("sort : ", myArray);

// .reverse method array untuk membalikkan data dalam array
myArray.reverse();
console.log("reverse : ", myArray);

// .indexOf method array untuk mencari indeks dari data dalam array
let nilaiCari = 3;
let indeksNilai = myArray.indexOf(nilaiCari);

if (indeksNilai === nilaiCari) {
  console.log(`nilai ${nilaiCari} ditemukan pada indeks ke-${indeksNilai}`);
} else {
  console.log(`nilai ${nilaiCari} tidak ditemukan dalam array`);
}

// .concat method array untuk menggabungkan dua array
let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);
console.log("concat : ", gabungArray);

// spread operator : nyalin data array ke data baru
let spread = [...myArray, ...arrayLain];
console.log("spread :", spread);

// .foreach method array untuk melakukan iterasi pada array
myArray.forEach((i) => {
  console.log("foreach :", i);
});

// .toString method array untuk mengubah array menjadi string
console.log("toString : ", myArray.toString());

// .tolocaleString method array untuk mengubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayToLocaleString = price.toLocaleString({
  stye: "currency",
  currency: "IDR",
});
console.log("toLocaleString :", arrayToLocaleString);

// .reduce method array untuk mengurangi array menjadi satu nilai
const sum = myArray.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);

  return accumulator + currentValue;
}, 0);
console.log("reduce : ", sum);

const dataNilai = [{ sekolah: "sekolah A", nilai: [40, 50, 60, 70, 90, 50] }];
console.log(
  dataNilai[0].nilai.reduce((prevVal, nextVal) => {
    // prevVal = menyimpan nilai sebelumnya yang akan dibandingkan dengan nilai setelahnya
    // nextVal = nilai setelahnya yang akan dibandingkan dengan nilai sebelumnya
    console.log("contoh lain reduce: ");
    console.log("p", prevVal);
    console.log("n", nextVal);
    // rumus menghitung total nilai akhir sebelumnya dengan nilai setelahnya
    return "total", prevVal + nextVal;
  })
);

// manipulasi data array of object
const dataSiswa = [
  {
    id: 1,
    name: "Dimas",
    age: 25,
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    name: "Tri",
    age: 26,
    hobby: ["membaca", "menggambar"],
  },
  {
    id: 3,
    name: "Sheila",
    age: 27,
    hobby: ["memasak", "menangis"],
  },
  {
    id: 4,
    name: "Seven",
    age: 25,
    hobby: ["gaming", "membaca"],
  },
];

// contoh lain forEach
const forEachDataSiswa = dataSiswa.forEach((data) => {
  console.log("forEach dataSiswa :", data.name, data.age <= 26);
});

// map : method array untuk mengubah setiap elemen array menjadi nilai baru atau mapping data tertentu
const getNameFromDataSiswa = dataSiswa.map((item) => {
  return item.name;
  // coba buat return dalam bentuk object
});
console.log("mapping data nama ;", getNameFromDataSiswa);

// .filter : method array untuk memfilter data array berdasarkan kondisi tertentu
const filterDataSiswa = dataSiswa.filter((item) => {
  // return item.age >= 27;
  return item.hobby.find((data) => data === "membaca"); // filter + find untuk mencari data dalam array
});
console.log("filter :", filterDataSiswa);

// .find : method array untuk mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
  // return data.name == "Dimas"; // case sensitive
  return data.name.toLowerCase() == "dimas"; // agar tidak case sensitive bisa di buat lower case dulu
});
console.log("find :", findDataSiswa);

// .length : method array untuk menghitung panjang/jumlah data dalam array
let lengthDataSiswa = dataSiswa.length;
console.log("length :", lengthDataSiswa);

// .every : method array untuk mengecek apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = dataSiswa.every((item) => {
  return item.age === 25;
});
console.log("every :", everyDataSiswa);

// .join method array untuk menggabungkan data dalam array menjadi string
