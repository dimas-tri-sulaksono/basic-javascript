// data object
const person = {
  nama: "Dimas",
  umur: 20,
  pekerjaan: "Backend",
  alamat: {
    jalan: "Jl. Bungsan",
    Kota: "Depok",
    Negara: "Indonesia",
  },
  hobby: ["membaca", "menulis"],
};

// cara mengakses nilai dalam object menggunakan titik .
console.log("nama :", person.nama);
console.log("kota aasal :", person.alamat.kota);

// cara mengakses data array dalam object
// person.hobby.push("Mendaki"); // menambahkan data baru ke array dalam object
console.log("hobby :", person.hobby[1]);

// cara mengubah nilai di dalam object
person.umur = 25;
console.log(person);

// cara menambahkan field baru dalam object
person.isMarried = true;
console.log(person);

// cara menghapus field dalam object
delete person.alamat.jalan;
console.log(person);

// cara akses data object menggunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);

const test = person.toString();
console.log(test); // output : dimas, 25, dst
