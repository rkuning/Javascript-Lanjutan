//function expresion
// const tampilNama = function (nama) {
//     return `hallo, ${nama}`;
// }
// console.log (tampilNama('danang'));

//diubah menjadi arrow function
//caranya sebagai berikut :
// jika parameternya hanya satu, terdapat 2 cara penulisan :
//1. pertama

const tampilNama = (nama) => {
    return `hallo, ${nama}`; 
}

console.log(tampilNama('danang'));

//2. cara kedua

const tampilNama3 = nama => {
    return `hallo, ${nama}`; 
}

console.log(tampilNama3('danang'));


// jika parameter lebih dari satu

const tampilNama2 = (nama, waktu) => {
    return `hallo ${nama}, selamat ${waktu}`;
}
console.log(tampilNama2('danang', 'sore'));


//jika isi dari function hanya mengembalikan nilai return sederhana, maka penulisan dapat lebih dipersingkat dengan cara :

//penulisan awal

const tampilNama7 = nama => {
    return `hallo, ${nama}`; 
}
console.log(tampilNama7('danang'));

//hasil jadi (implisit return)
const tampilNama4 = nama => `hallo, ${nama}`; 
console.log(tampilNama4('danang'));

//penulisan jika tidak ada parameter

const tampilNama9 = () => `hello world`;
console.log(tampilNama9());

console.log('============================');

//!penulisan sebelum arrow function

let mahasiswa = ['sandika', 'dody', 'erik'];

let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length;
});
console.log(jumlahHuruf);

//!penulisan setelah pakai arrow function

// let mahasiswa = ['sandika', 'dody', 'erik'];
let jumlahHuruf2 = mahasiswa.map ( nama => nama.length);
console.log(jumlahHuruf2);

let jumlahHuruf3 = mahasiswa.map ( nama => ({ nama: nama, jmlHuruf: nama.length}))
console.table(jumlahHuruf3);

