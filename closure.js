//? closure adalah suatu fungsi yang membutuhkan akses data di parrentnya
//contoh dibawah adalah tampilNama() dikatakan closure, karena dia membutuhkan variabel nama didalam function init();
//karena di lokal tampilNama() tidka ada variabel nama;

// function init() {
//     let nama = 'sandika';
//     function tampilNama () {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// function ucapkanSalam (waktu) {
//     return function(nama) {
//         console.log(`hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatMalam('danang');

// let counter = 0;

// let add = function() {
//     return ++ counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());