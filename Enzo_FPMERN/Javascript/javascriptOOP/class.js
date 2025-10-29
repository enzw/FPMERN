// class adalah cetakan, untuk membuat object
// Best case penamaan class diawali kapital
class Orang {
    // constructor adalah atribut bawaan class
    constructor(nama, umur){
        this.nama = nama,
        this.umur = umur
    }

    // Method adalah fungsi bawaan class (di class tidak perlu tulis syntax function ...)
    thnLahir() {
        const now = new Date();
        return now.getFullYear() - this.umur
    }

    // Static method (method yang cuma bisa diakses melalui class, misal class.status)
    // Static method tidak bisa diakses di object
    static status(){
        return "Istri Enjo";
    }
}

// Ada inheritance dalam dunia per class an
class Suami extends Orang {
    constructor(nama, umur, istri){
        super(nama, umur),
        this.istri = istri;
    }

    namaIstri() {
        return this.istri
    }
}

// Object adalah hasil cetakan kelas
// Otomatis membawa constructor & method dari kelas(Nama, Umur, dan thnLahir)
const Saskia = new Orang("Saskia", 20);

const Enjo = new Suami("Enzo", 21, "Saskia");

// Kita juga bisa tambahkan atribut diluar class (bakal jarang digunakan)
Saskia.asal = "Tangerang";

// console log object dari class Orang
console.log(`Tahun lahir ${Saskia.nama} adalah ${Saskia.thnLahir()}, asal : ${Saskia.asal}`);
// console log object dari class Suami inheritance ke Orang
console.log(`Nama istri ${Enjo.nama} adalah ${Enjo.namaIstri()}, dan ${Saskia.nama} adalah ${Orang.status()}`)

// test panggil static method 
Orang.status();
// Saskia.status(); bakal error karena static menempel pada class, bukan object