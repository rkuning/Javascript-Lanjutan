//object literal
// let mahasiswa1 = {
//     nama : 'danang',
//     energi : 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log('this.na :>> ', this.nama);
//     }
// }

// let mahasiswa2 = {
//     nama : 'andi',
//     energi : 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log('this.na :>> ', this.nama);
//     }
// }

//function decclaration
const methodeMahasiswa = {
    makan : function (porsi){
        this.energi += porsi;
        console.log('this.nama :>> ', this.nama);
    },
    main : function (jam){
        this.energi -= jam;
        console.log('this.nama :>> ', this.nama);
    },
    tidur : function(jam){
        this.energi += jam*2;
        console.log('this.nama :>> ', this.nama);
    }

}

function Mahasiswa (nama, energi) {
    let mahasiswa = Object.create(methodeMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}
let sandika = Mahasiswa('dananag', 20);
let anton = Mahasiswa('anton', 10);

//