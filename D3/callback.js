// callback : fungsi yang dikirim sebagai argumen / parameter ke fungsi lain
// atau fungsi yang memanggil fungsi lain

// fungsi callback
function printLog(data) {
  console.log("callback ", data);
}

// fungsi yang dipanggil fungsi callback
const penjumlahan = (a, b) => {
  return a + b;
};

function pengurangan(a, b) {
  return a - b;
}

printLog(penjumlahan(1, 2));
printLog(pengurangan(5, 2));

function prosesData(callback, data) {
  console.log("memproses data");
  callback(data);
}

function tampilkanHasil(data) {
  console.log("hasil data :", data);
}

// panggil fungsi dengan callback
prosesData(tampilkanHasil("kiw"), "data berhasil diproses");
