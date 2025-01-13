// switch case : kondisi untuk menampilkan output berdasarkan nilai tertentu
let remoteButton = 1;

switch (remoteButton) {
  case 1: {
    console.log("turn on");
    break;
  }
  case 2: {
    console.log("turn off");
    break;
  }

  default:
    console.log("input tidak valid");
    break;
}

// if statement: if(kondisi) { output }
let nilai = 100;
if (nilai == 100) {
  console.log("selamat anda mendapatkan nilai sempurna!");
}

// if else statement: if(kondisi) { output } else { output }
if (nilai == 100) {
  console.log("selamat anda lulus!");
} else {
  console.log("anda tidak lulus");
}

// if else if statement: if(kondisi) { output } else if(kondisi) { output } else { output }
let pendaftaran = "close";
let kuota = 10;

if ((pendaftaran = "open")) {
  console.log("pendaftaran sukses!");
} else if (kuota <= 10) {
  console.log("kuota masih tersedia");
} else {
  console.log("Anda tidak bisa mendaftar");
}

// nested if (if bersaranf) : if(kondisi) { if(kondisi) { output } else { output }}
let nilaiUAS = 92;
if (nilaiUAS >= 70) {
  if (nilaiUAS >= 90) {
    console.log("nilai A");
  } else {
    console.log("nilai B");
  }
} else {
  console.log("nilai C");
}

// if statement menggunakan ternary operator: kondisi ? output true : output false
let hasil = nilaiUAS >= 70 ? "lulus" : "tidak lulus";
console.log(hasil);

const hasil2 =
  nilai >= 90
    ? "A"
    : nilai >= 80
    ? "B"
    : nilai >= 70
    ? "C"
    : nilai >= 60
    ? "D"
    : "F";
console.log(`Nilai Anda: ${hasil2}`);
