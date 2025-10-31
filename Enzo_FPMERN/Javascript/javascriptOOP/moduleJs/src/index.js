import createBody from "./createBody.js";
import { createHeader } from "./createHeader.js";

class Table {
    constructor(init) {
        this.init = init;
    }

    // membuat fungsi untuk merender elemen dengan cara membuat table dan memanggil fungsi createHeader() dan createBody()
    render(element) {
        let table = `<table class="table table-striped table-dark table-hover">
                ${createHeader(this.init.columns)}
                ${createBody(this.init.data)}
            </table>`;
        element.innerHTML = table;
    }
}

// Membuat object dari class Table bernama table
const table = new Table({
    columns: ["Nama", "Pasangan", "Asal"],
    data: [
        ["Enzo", "Saskia", "Jogja"],
        ["Saskia", "Enjo", "Tangerang"]
    ]
})

// Memanggil elemen html dengan id "app" kedalam variable "app"
const app = document.getElementById("app");

// merender table dengan cara memanggil fungsi dari class di object table dengan parameter variable "app"
table.render(app);

