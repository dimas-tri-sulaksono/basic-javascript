// equal (sama dengan) ==
let equal = 100;
console.log("=== equal operator ===");
console.log(equal == 100); //true
console.log(equal == 90); //false

// not equal (tidak sama dengan) !=
let sifat = "rajin";
console.log("=== not equal operator ===");
console.log(sifat != "malas"); //true
console.log(sifat != "rajin"); //false

// strict equal ===
let strictEqual = 10;
console.log("=== strict equal operator ===");
console.log(strictEqual == "10"); //false
console.log(strictEqual === "10"); //false
console.log(strictEqual === 10); //true

// strict not equal ===
let strictNotEqual = 10;
console.log("=== strict not equal operator ===");
console.log(strictNotEqual != "1"); //true
console.log(strictNotEqual !== "10"); //true
console.log(strictNotEqual !== 10); //false

// kurang/lebih dari
let angka = 17;
console.log("=== kurang / lebih dari operator ===");
console.log(angka < 20); //true
console.log(angka > 17); //false
console.log(angka <= 17); //true
console.log(angka >= 17); //true

// operator condisional OR ||
console.log("=== OR ===");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(false || false || false || true); //true

// operator condisional AND &&
console.log("=== AND ===");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true && true && false && true); //false

// coba 1
let fristName = null;
let lastName = "wati";
let age = 20;
let noJob = true;
// let fullName = fristName || lastName || age < 20;
let fullName = age == 20 && noJob;
console.log(fullName);

// coba 2
let user = {
  name: "dimas",
  age: 20,
  address: {
    city: "Depok",
    country: "Indonesia",
  },
};

let country = user && user.address && user.address.country; // untuk cek datanya ada atau ngga
console.log("country : ", country);

function findUserCountry(user) {
  // return user.address && user.address.country ? true : false;
  let country = user && user.address && user.address.country;
  return country || "data tidak ditemukan";
}

console.log(findUserCountry(user));
