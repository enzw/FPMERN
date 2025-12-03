const createHeader = (data) => {
    let open = "<THead class='table-dark'><tr>";
    let close = "</tr></THead>";

    data.forEach(element => {
        open += `<th>${element}</th>`;
    });

    return open + close;
}

export { createHeader }