// array manipulation
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobdesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobdesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobdesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Deni",
    age: 26,
    jobdesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 26,
    jobdesk: [{ title: "frontend", salary: 8000000 }],
    hobby: ["membaca"],
  },
];

// console.log(employee[0].jobdesk[0].salary);

//==============================================================================

// soal 1: cari karyawan yang punya hobby "menulis" dan usianya di atas 25 tahun (gunakan .find dan .include)
const soal_1 = employee.find((employee) => {
  return employee.age > 25 && employee.hobby.includes("menulis");
});
console.log("soal 1 :\n", soal_1); //SELESAI

// dari mentor
const findMenulis = employee.find(
  (emp) => emp.hobby.includes("menulis") && emp.age > 25
);
console.log("coba 1 :", findMenulis);

//==============================================================================

// soal 2 : tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt (gunakan .filter dan .some)
const soal_2 = employee.filter((emp) =>
  emp.jobdesk.some((job) => job.title === "backend" && job.salary > 3000000)
);

console.log(
  "\nsoal 2 :\n",
  soal_2.map((emp) => ({
    nama: emp.nama,
    salary: emp.jobdesk[0].salary,
    title: emp.jobdesk[0].title,
  }))
); //SELESAI

// coba 2 - mandiri
const soal_2b = employee.filter((employee) => {
  return employee.jobdesk.some(
    (job) => job.title == "backend" && job.salary > 3000000
  );
});
const coba2 = soal_2.map((item) => {
  item.nama, item.jobdesk[0].salary, item.jobdesk[0].title;
});
console.log("\ncoba 2 :\n", coba2);

// dari mentor
const backendSalary = employee.filter((emp) =>
  emp.jobdesk.some((job) => job.title === "backend" && job.salary > 3000000)
);
console.log(
  "coba 2b :",
  //backendSalary.map((bs) => bs.jobdesk[0].salary) // menampilkan 1 data

  backendSalary.map((bs) => {
    let salary = bs.jobdesk[0].salary;
    let nama = bs.nama;
    return { gaji: salary, nama: nama }; // menampilkan 2 data
  })
);

//==============================================================================

// soal 3 : tampilkan nama karyawan yang punya satu hobby (gunakan .filter .map .length)
const soal_3 = employee.filter((satu) => {
  return satu.hobby.length == 1;
});
console.log(
  "\nsoal 3 :\n",
  soal_3.map((item) => {
    return item.nama;
  })
); //SELESAI

// dari mentor
const satuHobi = employee
  .filter((emp) => emp.hobby.length === 1)
  .map((data) => data.nama);
console.log("karyawan dengan satu hobby: ", satuHobi);

//==============================================================================

// soal 4 : cari nama karyawan yang posisinya "frontend" dengan gaji tertinggi, lalu nama karyawan (gunakan .filter .some .reduce .find)
const frontendEmployees = employee.filter((emp) =>
  emp.jobdesk.some((job) => job.title === "frontend")
);
const highestPaidFrontend = frontendEmployees.reduce((prev, current) =>
  prev.jobdesk[0].salary > current.jobdesk[0].salary ? prev : current
);
console.log("\nsoal 4 :\n", highestPaidFrontend.nama);

// dari mentor
const findHighestFrontend = employee
  .filter((item) => item.jobdesk.some((job) => job.title === "frontend"))
  .reduce((highest, current) => {
    const currentSalary = current.jobdesk.find(
      (job) => job.title === "frontend"
    ).salary;
    const highestSalary = highest.jobdesk.find(
      (job) => job.title === "frontend"
    ).salary;

    console.log(highestSalary);
    console.log(currentSalary);

    return currentSalary > highestSalary ? current : highest;
  });
console.log("\ncoba 4 :", findHighestFrontend);

//==============================================================================

// math
// soal 5 : cari nilai tertinggi dari 3 siswa menggunakan math object
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;
console.log("\nsoal 5 :\n", Math.max(siswa1, siswa2, siswa3)); //SELESAI

//==============================================================================

// soal 6 : cari selisih gaji tertinggi dan terendah dari data employee menggunakan math (gunakan filter, math method, spread operator, map, floor)
console.log("\nsoal 6 :");
const soal_6 = employee.filter((item) => {
  return item.jobdesk[0].title == "frontend";
});

let gajiTertinggi = Math.max(...soal_6.map((item) => item.jobdesk[0].salary));
let gajiTerendah = Math.min(...soal_6.map((item) => item.jobdesk[0].salary));
let bedaGaji = gajiTertinggi - gajiTerendah;

console.log(gajiTertinggi);
console.log(gajiTerendah);
console.log(bedaGaji); //SELESAI

// dari mentor

//==============================================================================

// kombinasi
// soal 7 : hitung total gaji semua karyawan setelah dipotong pajak 12% (gunakan reduce dan math.floor)
const totalGaji = employee.reduce((total, item) => {
  return total + item.jobdesk[0].salary;
}, 0);

const setelahPajak = Math.floor(totalGaji * 0.88); // 100 - 12 = 88 (gaji setelah dikurang pajak 12% sama dengan gaji * 0.88)
console.log("\nsoal 7 :\n", setelahPajak); //SELESAI

//==============================================================================

// soal 8 : tampilkan semua karyawan yang memiliki hobby terbanyak (gunakan map, math.max, filter dan length)
const hobbyTerbanyak = Math.max(...employee.map((item) => item.hobby.length));
// const soal_8 = employee.filter((item) => item.hobby.length === hobbyTerbanyak);
const soal_8 = employee
  .filter((item) => item.hobby.length === hobbyTerbanyak)
  .map((item) => item.nama);
console.log("\nsoal 8 :", soal_8);

/** soal 9 : tampilkan semua nama karyawan yang memiliki hobby terbanyak (gunakan map, math.max, filter, length)
 * output : [danudani]
 * biar rapih pakai join (", ") => [danu, dani]
 */
const soal_9 = employee
  .filter((item) => item.hobby.length === hobbyTerbanyak)
  .map((item) => item.nama)
  .join(", ");
console.log("\nsoal 9 :", soal_9);

// dari mentor
const jumlahHobi = employee.map((emp) => emp.hobby.length);
const maxHobi = Math.max(...jumlahHobi);
const karyawanTerbanyakHobi = employee.filter(
  (emp) => emp.hobby.length === maxHobi
);
const result = karyawanTerbanyakHobi.map((emp) => emp.nama).join(", ");
console.log("karyawan denha hobby terbanyak :", result);
