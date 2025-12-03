import { createHeader } from "./createHeader.js";
import { createBody } from "./createBody.js";

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

const data = fetch('https://jsonplaceholder.typicode.com/users')

app.innerHTML = "Loading..."

data.then(res => res.json())
    .then(res => {
        const columns = ["Name", "Username", "Email", "City", "Company"];
        const rows = res.map(u => [
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
    }).catch(err => {app.innerHTML = err.message})
