const Pacar = [
    {
        nama : "saskia",
        jurusan : "informatika",
        umur : 20
    },
    {
        nama : "gwen",
        jurusan : "oseanografi",
        umur : 20
    },
    {
        nama : "maysa",
        jurusan : "informatika",
        umur : 22
    }
];

// panggil atribut objek dengan map
const listNama = Pacar.map((value)=>value.umur + 5);

// menyaring objek dengan atributnya, misal cari yang tuwa
const yangMuda = Pacar.filter((value)=>value.umur > 20);

console.log(listNama)
console.log(yangMuda)