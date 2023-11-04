// App.js

// MEMANGGIL SEMUA MODULE DAN TAMPUNG DI VARIABLE BERBEDA
const Tambah = require('./module1');
const Kurang = require('./module2');
const Bagi = require('./module3');
const Kali = require('./module4');

// SET ANGKA 1 DAN 2 AGAR SEMUA MODULE TERPENUHI
var angka1 = 10;
var angka2 = 5;

// MEMANGGIL SETIAP FUNGSI DALAM MODUL UNTUK PENGETEST-AN APAKAH KODE BERJALAN SESUAI ATAU BELUM
console.log("Di Bawah ini Hasil penjumlahan : ");
console.log(Tambah(angka1, angka2));
console.log("Di Bawah ini Hasil Pengurangan : ");
console.log(Kurang(angka1, angka2));
console.log("Di Bawah ini Hasil Pembagian : ");
console.log(Bagi(angka1, angka2));
console.log("Di Bawah ini Hasil Perkalian : ");
console.log(Kali(angka1, angka2));