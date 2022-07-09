//ambil semua elemen video
//menjadikan semua hasil output menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);

//pilih array yang hanya terdapat JS LNJT di teksnya
// const jsLanjut = videos.filter(video => video.textContent.includes('JS LNJT'));
//chaining dengan tujuan selanjutnya, hilangkan titik koma
let jsLanjut = videos.filter(video => video.textContent.includes('JS LNJT'))

//ambil durasi masing-masing video
.map(item => item.dataset.duration)
//ubah durasi menjadi float, ubah menit menjdi detik
.map(waktu => {
    //durasi 10:10 >> [10, 10] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    //part [0] di kali 60 maksudnya untuk mendapatkan jumlah total detik di parts[0]
    return (parts[0] * 60) + parts[1];
})
//jumlahkan semua detik
.reduce((total, detik) => total + detik, 0);
//ubah format menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut - menit * 60;

//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('JS LNJT')).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video.`



console.log(jam);