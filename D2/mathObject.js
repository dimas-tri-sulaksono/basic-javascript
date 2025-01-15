// math object : metode-metode untuk operasi matematika
let angkaAcak = Math.random();
console.log(angkaAcak);
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); //

// Math.floor untuk membulatkan angka ke bawah
console.log("math floor :", Math.floor(3.65));

// Math.ceil untuk membulatkan angka ke atas
console.log("math ceil: ", Math.ceil(3.65));

// Math.round untuk membulatkan ke angka terdekat
console.log("math round: ", Math.round(3.65));

// Math.max untuk mencari angka tertinggi
console.log("math max: ", Math.max(12, 23, 54, 2, 65, 43));

// Math.min untuk mencari angka terendah
console.log("math min: ", Math.min(12, 23, 54, 2, 65, 43));

// Math.sqrt untuk menghitung akar kuadrat
console.log("math sqrt: ", Math.sqrt(16));

// Math.pow untuk menghitung pangkat
console.log("math pow: ", Math.pow(2, 3));

// Math.PI untuk nilai pi
console.log("math pi: ", Math.PI);

let luasLingkaran = Math.PI * Math.pow(5, 2);
console.log("luas lingkaran :", luasLingkaran);
console.log("luas lingkaran :", Math.floor(luasLingkaran));