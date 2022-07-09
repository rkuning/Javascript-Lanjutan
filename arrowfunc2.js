//!konsep this pada arrow function


//! constructor function
// const Mahasiswa = function() {
//     this.nama = 'sandika',
//     this.umur = 32
//     console.log(this);

//     this.sayHello = function() {
//         console.log(`hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun.`);
//     }
// }

// const mhs = new Mahasiswa();


//arrow function
// const Mahasiswa = function() {
//     this.nama = 'sandika',
//     this.umur = 32
//     console.log(this);

//     this.sayHello = () => {
//         console.log(`hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun.`);
//     }
// }

// const mhs = new Mahasiswa();

//object literal

//?arrow function tidak memiliki konsep this

// const mhs1 = {
//     nama : 'danang',
//     umur: 23,
//     sayHello: function() {
//         console.log(`hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun.`);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'sandika',
//     this.umur = 32
//     console.log(this);

//     this.sayHello = function() {
//         console.log(`hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun.`);
//     }
    //jika pakai function declaration, hasilnya nan, karena this pada set interval 
    //tidak mendapatkan variabel this pada function mahasiswa. tapi dia mencari this di global scope.
    // setInterval(function(){
    //     console.log(this.umur++);
    // }, 500);
    //solusinya pakai arrow function, dengan penulisan sebagai berikut :
    // kenapa berhasil? karena arrow function tidak memiliki konsep this. sehingga dia akan mencari this di parrent functionnya.
    // setInterval(() => {
    //     console.log(this.umur++);
    // }, 500);
// }

// const danang = new Mahasiswa();


//implementasi arrow function lanjutan

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        //membalikkan niali variabel
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);

});