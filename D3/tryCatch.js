// try catch : untuk error handling

function penjumlahan(a, b) {
  try {
    if (a === 0 || b === 0) {
      //   throw new Error("nilai tidak valid!");
      throw "nilai tidak valid!";
    }
    return a + b;
  } catch (error) {
    console.log("error :", error);
  }
}

console.log("hasil :", penjumlahan(10, 2));
console.log("hasil :", penjumlahan(0, 2)); // jika salah satu nilai param = 0, maka hasilnya undefined
