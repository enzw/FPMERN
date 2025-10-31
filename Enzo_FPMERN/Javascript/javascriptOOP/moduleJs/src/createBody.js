const createBody = (data) => {
    // membuat variable open dan close untuk membuat body table
    let open = "<tbody>"
    let close = "</tbody>"

    // membuat perulangan untuk memasukan tiap2 datum kedalam body (kolom 0 dan kolom 1)
    data.forEach(element => {
        open += `
            <tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
            </tr>
            `;
    });

    // mengembalikan open(sudah berisi data) dan close sehingga menjadi body table
    return open + close;
}

export default createBody;