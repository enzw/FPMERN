class Table {
    constructor(init){
        this.init = init;
    }

    // Membuat fungsi createHeader untuk header table
    createHeader(data){
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

    createBody(data){
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

    // membuat fungsi untuk merender elemen dengan cara membuat table dan memanggil fungsi createHeader() dan createBody()
    render(element){
        let table = '<table class="table table-striped table-dark table-hover">' + this.createHeader(this.init.columns) + this.createBody(this.init.data) + '</table>';
        element.innerHTML = table;
    }

}

// Membuat object dari class Table bernama table
const table = new Table({
    columns : ["Nama", "Pasangan", "Asal"],
    data : [
        ["Enzo", "Saskia", "Jogja"],
        ["Saskia", "Enjo", "Tangerang"]        
    ]
})

// Memanggil elemen html dengan id "app" kedalam variable "app"
const app = document.getElementById("app");

// merender table dengan cara memanggil fungsi dari class di object table dengan parameter variable "app"
table.render(app);

