import { createHeader } from "./createHeader.js";
import { createBody } from "./createBody.js";
import { getData } from "./callbackAPI.js";

class Table {
    constructor(init) {
        this.init = init;
    }

    render(element) {
        let table =
            `<table class="table table-striped table-dark table-hover">` +
            createHeader(this.init.columns) +
            createBody(this.init.data) +
            `</table>`;
        element.innerHTML = table;
    }
}

const app = document.getElementById("app");

getData("https://jsonplaceholder.typicode.com/users", function (data) {
    const columns = ["Name", "Username", "Email", "City", "Company"];
    const rows = data.map(u => [
        u.name,
        u.username,
        u.email,
        `${u.address.street}, ${u.address.suite}, ${u.address.city}, ${u.address.zipcode}`,
        u.company.name
    ]);

    const table = new Table({
        columns: columns,
        data: rows
    });

    table.render(app);
});
