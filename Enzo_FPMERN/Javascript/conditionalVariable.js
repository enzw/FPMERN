// jika true maka yang keprint adalah yang kiri, kalau false maka yang keprint adalah yang kanan

const umur = 30;

const keterangan = umur < 50 ? "masih muda" : "sudah tuwa";
console.info(keterangan);

// =====================================================================

// eksplorasi variable kondisional

const saskia = 10;

// jika kondisi true maka kembalikan true, jika false maka yang dikeluarkan "gak cantik"
const denganOr = saskia < 10 || "Gak cantik"; // jika kondisi awal terpenuhi maka false statenya ganti dengan yang di inginkan

// jika kondisi false maka kembalikan false, jika True maka yang dikeluarkan "cantiknyoo"
const denganAnd = saskia == 10 && "Cantiknyoo"; // jika konsisi awal terpenuhi maka true statenya ganti dengan yang di inginkan

console.info(denganOr);
console.info(denganAnd);