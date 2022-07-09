// 2.1 excecution context, hoising & scope

// var nama = 'danang';
// console.log(nama);

// creation phase pada Global Context

//nama var = undefined;
//nama function = fn()
//hoisting
// window = global object
// this = window


//execution phase
// console.log(sayHello());

// var nama = 'sandika';
// var umur = 33;

// function sayHello() {
//     return `hello nama saya ${nama}, saya ${umur} tahun.`;
// }

//function membuat local exechtion contks
//yang didalamnya terdapat creation dn esecution phase
//window
//argument
//hoisting

// var nama = 'sanang';
// var username = '@rkuning';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log (cetakURL('@dodyferdiansah'));

// function a() {
//     console.log('ini a');
//     function b () {
//         console.log ('ini b');
//         function c () {
//             console.log('ini c');
            
//         }
//         c();
//     }
//     b();
// }

// a();



