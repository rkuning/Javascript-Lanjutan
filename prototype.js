// function Mahasiswa (nama, energi) {
//     // let mahasiswa = Object.create(methodeMahasiswa);
//     // let mahasiswa = {};
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;

//     Mahasiswa.prototype.makan = function(porsi){
//         this.energi += porsi;
//         return `hallo ${this.nama}, selamat makan!`;
//     }
//     Mahasiswa.prototype.main = function (jam){
//         this.energi -= jam;
//         return `hello ${this.nama}, selamat main`;
//     }
//     Mahasiswa.prototype.tidur = function (jam){
//         this.energi += jam*2;
//         return `hello ${this.nama}, selamat tidur!`;
//     }
//     // return mahasiswa;
//     return this;
// }

// let sandika = new Mahasiswa('sandika', 10);

//versi kelas

// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi){
//         this.energi += porsi;
//         return `hello ${this.nama}, selamat makan`;
//     }
//     main (jam) {
//         this.energi -= jam;
//         return `hello ${this.nama}, selamat main`;
//     }
//     tidur (jam){
//         this.energi += jam;
//         return `hellp ${this.nama}, selamat tidur!`;
//     }
// }
// let sandika = new Mahasiswa('sandika', 10);

// let angka = [];
//let angka = new Array();

// function Array() {
//     let this = Object.create(Array.prototype);
// }

// let angka = [1,2,3];

// console.log(angka.reverse());
// console.log(angka.sort());