const arr = [1, 2, 3, 4, 5]
const str = "Aisyah Maira"
const obj = {
    nama : "Enzo",
    umur : 21
}

console.log(arr) // [ 1, 2, 3, 4, 5 ]
console.log(str) // Aisyah Maira
console.log(obj) // { nama: 'Enzo', Umur: 21 }
console.log(...arr) // 1 2 3 4 5, dia nge iterate 1 per 1 angka dalam array
console.log(...str) // A i s y a h   M a i r a, dia nge iterate 1 per 1 huruf dalam string
console.log({ ...obj }) // { nama: 'Enzo', Umur: 21 }, seolah sama, tapi sebenernya dia bikin objek baru

// Spread operator
// 1. untuk spread parameter

function tambahkanSpread (a, b, c, d, e){
    return a + b + c + d + e;
}

// ...arr disini ngisi parameter fungsi diatas tadi
// kalo yang manual kan harus aksis index 1 per 1 misal arr[0], arr[1], dst.
console.log(tambahkanSpread(...arr));

// 2. untuk concat array
const arr2 = [6, 7, 8]

// misal mau concat arr dengan arr2 tinggal gini
// gausah repot2 manual, misal console.log(arr.concat(arr2))
console.log(...arr, ...arr2)

// bisa juga dipakai buat concat object
const obj2 = {
    hobi : ["Makan", "Main gitar", "Gaming"]
}

const enzo = {...obj, ...obj2}
console.log(enzo)

// =================================================================================================

// Destructuring 
const color = ["Merah", "Putih", "Biru"];

// kalo jadul kan ambil per index, misal color[0]
// contoh jadul/salah
// let merah = color[0]
// let putih = color[1]
// let biru = color[1]

// kita bisa ambil dengan cara seperti ini, dia akses sesuai index, 
let [, Putih, Biru] = color
// kalo ambil index[2] maka kasih koma 2 di depan
console.log(Putih,Biru)

// nah, di object juga bisa diterapkan hal yang sama, misal...
const { nama, umur } = obj
// nama variable(yang ada dalam kurung kurawal) harus sama dengan atribut object yang di assignkan

console.log(nama, umur)

// =================================================================================================

// Rest Operator
// kombinasi antara spread dan destructure

const users = [
    {nama : "Enzo" , umur : "21"},
    {nama : "Aisyah" , umur : "20"},
    {nama : "Fiana" , umur : "19"}
]

// misal kita mau manggil enzo, dan sisanya
const [Enzo, ...sisanya] = users;

console.log(Enzo);
// sisanya keluar sebagai array of object
console.log(sisanya);