// Objek Mahasiswa

const Mahasiswa = {
    nama: "Saskia Putri",
    nim: "24060123140099",
    jurusan: "Informatika",
    angkatan: 2023,
    kontak: {
        email: "saskia@student.univ.ac.id",
        hp: "081298765432"
    },
    alamat: {
        rumah: "Ciledug",
        kos: "Tembalang"
    },
    hobi: ["Membaca buku", "Ngoding", "Nonton film dokumenter"]
};


// Objek Barang E-commers

const Produk = {
    id: "S001",
    nama: "Planner Aesthetic",
    harga: 120000,
    stok: 12,
    kategori: "Alat Tulis",
    spesifikasi: {
        ukuran: "A5",
        cover: "Hardcover",
        halaman: 200
    },
    diskon: {
        persen: 15,
        aktif: true
    }
};

// Array of Object

const daftarMahasiswa = [
    {
        nama: "Saskia Putri",
        nim: "24060123140099",
        jurusan: "Informatika",
        angkatan: 2023,
        alamat: {
            rumah: "Ciledug",
            kos: "Tembalang"
        }
    },
    {
        nama: "Enzokulin S",
        nim: "24060123140090",
        jurusan: "Informatika",
        angkatan: 2023,
        alamat: {
            rumah: "Semarang",
            kos: "Banjarsari"
        }
    },
    {
        nama: "Aliyah Gwen",
        nim: "24060123140123",
        jurusan: "Oseanografi",
        angkatan: 2023,
        alamat: {
            rumah: "Jakarta Selatan",
            kos: "Tembalang"
        }
    }
];


// ===================================================

// Destructuring

// Pengaliasan dan set default value object Mahasiswa
const {nama, nim, jurusan:jur, angkatan:akt, kontak:{email:em}, alamat:{kos}, hobi, suami = "Enzokulin"} = Mahasiswa;

console.info(nama, nim, jur, akt, em, kos, hobi, suami);

// Pengaliasan dan set default value object Barang E-commers
const {id, nama:nami, harga:hrg, stok, kategori:kat, spesifikasi:spek, diskon:{persen}, vendor = "VMT"} = Produk

console.info(id, nami, hrg, stok, kat, spek, persen);

// Destructuring array of object
const [Saskia, Enzo, Gwen] = daftarMahasiswa;

// karena nama variable tidak boleh sama, maka dibedakan
const {nama:nama1, nim:nim1, jurusan:jur1, angkatan:akt1, alamat:{kos:kos1}} = Saskia
const {nama:nama2, nim:nim2, jurusan:jur2, angkatan:akt2, alamat:{kos:kos2}} = Enzo

console.info(nama1, nim1);
console.info(nama2, nim2);

// Destructuring Object of array to function
const infoMhs = ({nama, nim, jurusan, angkatan, alamat:{kos}}) => console.info(nama, nim);

infoMhs(Gwen);


