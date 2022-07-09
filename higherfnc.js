// higher order function
//filter, map & reduce

const angka = [3,5,6,2,6,-2,-1,0,4,7,8];

//mencari angka yang lebih dari 3

//?cara biasa
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

//? pakai filter & masih pakai function declaration
// const newAngka = angka.filter(function(a){
//     return a >= 3;
// });
// console.log(newAngka);

//? pakai filter & array function
// const newAngka = angka.filter(a => a >= 3 );
// console.log(newAngka);


//map

//kalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

//reduce

//jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator+currentValue,0);
// console.log(newAngka);

//methode chaining
//cari angka > 6
//kalikan 3
//jumlahkan

// const hasil = angka.filter(a => a > 6) //7,8
//     .map(a => a * 3)//7*3 , 8*3 [21,24]
//     .reduce((acc, cur) => acc + cur, 0); //21+24 = 45
// console.log(hasil);
