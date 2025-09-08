/* Buiit  in method */
/*
1. String Methods
 1. charAt(index)
Mengembalikan karakter pada indeks tertentu dalam string.
*/
const nama = 'Ghifar'
console.log(nama.charAt(1))
//output : h
/*
2. concat(string)
Menggabungkan dua atau lebih string.
*/
let namaLengkap = nama.concat(' Ramdhani')
console.log(namaLengkap)
// output: Ghifar Ramdhani

/*
3. includes(substring)
Mengecek apakah string mengandung substring tertentu.
*/
console.log(namaLengkap.includes(' Ramdhani'))
// ourput: true
/*
4. toUpperCase()
Mengubah semua huruf dalam string menjadi huruf besar.
*/
console.log(namaLengkap.toUpperCase()) 
// output: GHIFAR RAMDHANI
/*
5. toLowerCase()
Mengubah semua huruf dalam string menjadi huruf kecil.
*/
console.log(namaLengkap.toLowerCase())
// output: ghifar ramdhani
/*
2. Array Methods
6. push(item)
Menambahkan elemen ke akhir array.
*/
let arr = [1,2,3]
arr.push(4,5,6)
console.log(arr)
// output [1,2,3,4,5,6]
/*
7. pop()
Menghapus elemen terakhir dari array.
*/
arr.pop()
console.log(arr)
//output: [1,2,3,4,5]
/*
8. shift()
Menghapus elemen pertama dari array.
*/
arr.shift()
console.log(arr)
//output: [2,3,4,5]
/*
9. unshift(item)
Menambahkan elemen ke awal array.
*/
arr.unshift(1)
console.log(arr)
// output: [1,2,3,4,5]
/*
10. slice(start, end)
Mengembalikan bagian dari array tanpa mengubah array asli.
*/
let newArr = arr.slice(0, 2)
console.log(newArr)
// output: [1, 2]
/*

11. splice(start, deleteCount, item)
Menambah/menghapus elemen dari array.
 */
arr.splice(0,1,8)
console.log(arr)
// output: [8,2,3,4,5]
/*


12. map(callback)
Membuat array baru dengan hasil dari fungsi callback.
*/

const genap = arr.map(x=> x % 2 === 0)
console.log(genap)
//output: [ true, true, false, true, false]
/*

13. filter(callback)
Mengembalikan array baru dengan elemen yang memenuhi kondisi callback.
*/
const angkaGenap = arr.filter(y => y % 2 === 0)
console.log(angkaGenap)
// output: [8, 2, 4]
/*
14.reduce(callback, initialValue)
mengakumulasi nilai dari seluruh elemen array menjadi satu nilai berdasarkan fungsi callback.
Contoh: [1, 2, 3].reduce((a, b) => a + b, 0) → 6
*/
const angka = [1, 2, 3, 4, 5];
const total = angka.reduce((acc, curr) => acc + curr);
console.log(total); 
// Output: 15
/*

15. find(callback)
Mengembalikan elemen pertama yang memenuhi kondisi callback.
*/
const hasil = angka.find(x => x > 3);
console.log(hasil);
//output: 4
/*

3. Object Methods
16. Object.keys(obj)
Mengembalikan array dari semua properti (key) dalam objek.
*/
const siswa = {
    nama: 'Ghifar',
    umur: 26,
    jurusan: 'Informatika'
};

const kunci = Object.keys(siswa);
console.log(kunci)
//output: ['nama', 'umur', 'jurusan']
/*
17. Object.values(obj)
Mengembalikan array dari semua nilai properti dalam objek.
*/
console.log(Object.values(siswa))
//output: [ 'Ghifar', 20, 'Informatika' ]
/*

18. Object.entries(obj)
Mengembalikan array dari pasangan key-value dalam objek.
*/
console.log(Object.entries(siswa))
// Output: [['nama', 'Ghifar'], ['umur', 26], ['jurusan', 'Informatika']]
/*
4. Math Methods
19. Math.random()
Menghasilkan angka acak antara 0 dan 1.
*/
let angkaRandom = Math.random()
console.log(angkaRandom)
//output: angka random
/*

20. Math.floor(number)
Membulatkan angka ke bawah.
*/
let nilai = 7.8;
console.log(Math.floor(nilai));
// output: 7

/* Built-in function */

/*
1. parseInt()
Mengubah string menjadi bilangan bulat.
*/
console.log(parseInt('123')); // Output: 123
/*
2. parseFloat()
Mengubah tipe data menjadi angka.
*/
console.log(parseFloat('45.6'))
//output: 45.6
/*
2. isNaN()
Mengecek apakah nilai adalah NaN (Not a Number).
*/
console.log(isNaN('abc')); // Output: true

/*
4. String()
Mengubah tipe data menjadi string.
*/
console.log(String(100)); // Output: "100"

/*
5. Date()
Membuat objek tanggal dan waktu.
*/
console.log(new Date()); // Output: Tanggal dan waktu saat ini
