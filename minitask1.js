const motor = ['honda', 'yamaha', 'suzuki'];
let cari = 'suzuki'

let index = -1;
for (let i = 0; i < motor.length; i++) {
    if (motor[i] === cari) {
        index = i;
    }
}

if (index !== -1) {
    console.log('merek motor tersedia');
} else {
    console.log('merek motor tidak tersedia');
}

// mngunakan indexOf


const hotel = ['mercure', 'swiss-bellin', 'oyo'];
let search = 'mercure';

let index1 = hotel.indexOf(search);

if (index1 !== -1) {
    console.log('hotel ada');
} else {
    console.log('hotel tidak ada');
}