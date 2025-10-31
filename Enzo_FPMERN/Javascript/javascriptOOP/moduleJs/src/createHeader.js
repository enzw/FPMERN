// Membuat fungsi createHeader untuk header table
const createHeader = (data) => {
    // membuat variable open dan close untuk membuat header table
    let open = "<Thead class='table-dark'><tr>";
    let close = "</tr></Thead>";

    // membuat perulangan untuk memasukan tiap2 datum kedalam header
    data.forEach(element => {
        open += `<th>${element}</th>`;
    });

    // mengembalikan open(sudah berisi data) dan close sehingga menjadi header table
    return open + close;
}

export { createHeader };