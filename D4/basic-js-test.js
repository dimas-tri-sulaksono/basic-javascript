const { error } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");

const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

// SOAL :
/** 1 SELESAI ===============================================================================================
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */
console.log("\nsoal 1 : SELESAI");

const soal_1 = carProducts.filter((item) => {
  return item.price != null;
});

let hargaTertinggi = Math.max(...soal_1.map((item) => item.price));
let hargaTerendah = Math.min(...soal_1.map((item) => item.price));

// console.log("harga mobil tertinggi :", hargaTertinggi);
// console.log("harga mobil terendah :", hargaTerendah); // ada yang null, tanya apakah yang null termasuk kriteria pencarian!

/** 2 SELESAI ===============================================================================================
 * filter dan tampilkan data mobil dengan tag "Promo"
 */
console.log("\nsoal 2 : SELESAI");

let filterValue = "Promo";
let filterResult = carProducts.filter((item) => item.tag.includes(filterValue));

// console.log(filterResult);

/** 3 SELESAI ===============================================================================================
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */
console.log("\nsoal 3 : SELESAI");
carProducts.sort((a, b) => a.price - b.price);
carProducts.reverse();
carProducts.forEach((e) => {
  //console.log(`ID mobil (${e.id}) harga : ${e.price}`);
});

/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 * referensi : https://stackoverflow.com/questions/68596513/reduce-data-into-nested-categories
 */
console.log("\nsoal 4 : SELESAI");
const soal_4 = carProducts.reduce((acc, t) => {
  return {
    ...acc,
    [t.variant[0].type]: {
      ...acc[t.variant[0].type],
      [t.name]: [...(acc?.[t.name]?.[t.variant[0]] || []), { price: t.price }],
    },
  };
}, {});
// console.log(soal_4);

/** 5 SELESAI ===============================================================================================
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */
console.log("\nsoal 5 : SELESAI");
try {
  const data = fs.readFileSync("./carProducts.json", "utf-8");
  const jsonData = JSON.parse(data);
  jsonData.sort((a, b) => a.price - b.price);
  jsonData.reverse();
  // console.log(jsonData);
  fs.writeFile(
    "./carProducts.json",
    JSON.stringify(jsonData, null, 1),
    "utf-8",
    (error) => {
      if (error) {
        console.log(error);
        return error;
      }
    }
  );
  console.log("berhasil mengurutkan data dan menulis ulang file");
} catch (error) {
  console.error("Error reading JSON file:", error);
}

/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 * (buat file baru)
 */
const dataBaru = {
  id: 7,
  name: "Tesla",
  price: 1000,
  tag: ["Promo"],
  variant: [
    {
      color: "black",
      transmission: "automatic",
      type: "electric",
      fuelType: "battery",
    },
    {
      color: "white",
      transmission: "manual",
      type: "electric",
      fuelType: "battery",
    },
  ],
  isPreorder: false,
};

fs.readFile("./carProducts.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  try {
    // console.log("baca data :\n", data);
    const jsonData = JSON.parse(data);
    jsonData.push(dataBaru);

    fs.writeFile(
      "./addNewCarProducts.json",
      JSON.stringify(jsonData, null, 1),
      "utf-8",
      (error) => {
        if (error) {
          console.log(error);
          return error;
        }
      }
    );

    console.log("\nsoal 6 : SELESAI\nberhasil menambahkan data baru");
  } catch (error) {}
});

/** 7 SELESAI ===============================================================================================
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */
function getDataMobil() {
  // promise adalah sebuah object yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    const data = carProducts.filter((item) => {
      return item.price != null;
    });

    if (data) {
      resolve(data); // resolve : untuk mengembalikan data yang berhasil ditangkap
    } else {
      reject("data tidak ada"); // reject : mengembalikan error jika data gagal diambil
    }
  });
}

async function soal_7() {
  try {
    // await : kata kunci dalam async untuk menangani error jika data gagal diambil
    const getData = await getDataMobil();
    // console.log("data yang diterima :", getData);
    let hargaTertinggi = Math.max(...getData.map((item) => item.price));
    let hargaTerendah = Math.min(...getData.map((item) => item.price));
    let selisihHarga = hargaTertinggi - hargaTerendah;
    console.log("\nsoal 7 : SELESAI");
    console.log("harga tertinggi :", hargaTertinggi);
    console.log("harga terendah :", hargaTerendah);
    console.log("selisih harga :", selisihHarga);
  } catch (error) {
    console.log("terjadi kesalahan saat mengambil data");
  }
}
soal_7();

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 * referensi : https://stackoverflow.com/questions/16626735/how-to-loop-through-an-array-containing-objects-and-access-their-properties
 */

function soal_8b(carProducts) {
  let maxVar = 0;
  let carMaxVar = null;

  carProducts.forEach((car) => {
    if (car.variant.length > maxVar) {
      maxVar = car.variant.length;
      carMaxVar = car;
    }
  });
  return carMaxVar;
}

console.log("mobil dengan varian terbanyak : ", soal_8b(carProducts));

/** 9 ===============================================================================================
 * buat fungsi untuk mencari mobil yang tidak preorder
 */
console.log("\nsoal 9 : SELESAI");
const soal_9 = carProducts.filter((item) => {
  return item.isPreorder === false;
});
// console.log(soal_9);

/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */
function soal_10(N) {
  let result = "";
  for (let i = 1; i <= N; i++) {
    for (j = N; j > i; j--) {
      result += " ";
    }
    for (j = 1; j <= i; j++) {
      result += "#" + " ";
    }
    result += "\n";
  }
  return result;
}
console.log("\nsoal 10 : SELESAI");
console.log(soal_10(5));

/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */
console.log("\nsoal 11 : SELESAI");
// array manipulation
const employee = [
  {
    id: 1,
    nama: "Dimas",
    age: 25,
    jobdesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Tri",
    age: 26,
    jobdesk: [{ title: "backend", salary: 20000000 }],
    hobby: ["membaca", "menulis"],
  },
];

// create
const newEmp = {
  id: 3,
  nama: "Sulaksono",
  age: 27,
  jobdesk: [{ title: "fullstack", salary: 32000000 }],
  hobby: ["membaca", "menulis"],
};
employee.push(newEmp);

// read
// console.log(employee);

// update
employee[0].nama = "Dimaz";
// console.log(employee);

// delete
// pop
let idTerakhir = employee.pop();
// console.log("pop : ", idTerakhir);
// console.log("popped array : ", employee);
