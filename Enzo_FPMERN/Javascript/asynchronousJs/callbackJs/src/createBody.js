// const createBody = (data) => {
//     let open = "<tbody>"
//     let close = "</tbody>"

//     data.forEach(element => {
//         open += `<tr>
//             <td>${element[0]}</td>
//             <td>${element[1]}</td>
//             <td>${element[2]}</td>
//             <td>${element[3]}</td>
//             <td>${element[4]}</td>
//         </tr>`
//     });

//     return open + close;
// }

// export { createBody }

const createBody = (data) => {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach(row => {
        open += "<tr>";
        row.forEach(cell => {
            open += `<td>${cell}</td>`;
        });
        open += "</tr>";
    });

    return open + close;
};

export { createBody };
    