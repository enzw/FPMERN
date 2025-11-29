// contoh sederhana callback, yaitu pemanggilan fungsi lain didalam sebuah fungsi melalui parameter

const saskia = (enzo, sayang, callbacknya) => {
    console.log(enzo, sayang);
    callbacknya();
}

const enzoSigma = () => {
    console.log("saskia");
}

// kita coba panggil funsi utama untuk memanggil fungsi "callback" nya
// fungsi callback dipanggil tanpa menggunakan "kurung" parameter
saskia("enzo", "sayang", enzoSigma);