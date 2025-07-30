// Destructuring Array

const pacar = ["Saskia", "Putri", "Paramitha", "Aliyah", "Gwen"];

// Cara manual seperti ini
// const pacar1 = pacar[0];
// const pacar2 = pacar[1];

// console.info(pacar1, pacar2)

// ======================================================

// Cara destructur seperti ini
// const [PacarSatu, PacarDua, PacarTiga] = pacar;

// "Parameter" pertama ambil index pertama, begitu seterusnya
const [PacarSatu, PacarDua, PacarTiga, ...SisaPacar] = pacar;
// ...SisaPacar mengambil value2 yang tidak disebut sebelumnya(dalam bentuk array/list)

console.info(PacarSatu, PacarDua, PacarTiga, SisaPacar);


// ======================================================

// Destructuring Object

const Istri = {
    Nama : "Saskia Putri",
    Hobby : "Membaca Buku",
    Pendidikan : "Strata 1",
    Alamat : {
        Rumah : "Ciledug",
        Kos : "Tembalang"
    }
}

// Cara manual seperti ini
// const nama = istri.Nama;
// const alamat = istri.Alamat;

// console.info(nama, alamat);

// ======================================================

// Cara destructur seperti ini

//      Alamat akan muncul sebagai Object
// const {Nama, Hobby, Pendidikan, Alamat} = Istri;

//      Kalau mau lebih spesifik tinggal pakai atribut:{spesifik}
// const {Nama, Hobby, Pendidikan, Alamat:{Rumah, Kos}} = Istri; (panggil langsung ke Spesifik misal Kos/Rumah)

//      Sama seperti di array ... untuk ambil sisa value yang tidak disebut
const {Nama, Hobby, ...infoLainya} = Istri;


console.info(Nama, Hobby, infoLainya);