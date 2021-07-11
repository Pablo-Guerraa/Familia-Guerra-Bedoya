import users from "./users"

const tableRow = document.getElementById("table-row");
const tableCorreo = document.getElementById("table-correo");
const nameCard = document.getElementsByClassName("name-card")
// Añado el nombre en el header de la tabla
const correo = "<tr><th>Nombre</th><th>Ocupación</th><th>Age</th></tr>";
tableCorreo.innerHTML = correo;

function usersCards() {
    // for (i = 0; i < users.length; i++) {
        const descriptionUsers = "<h5 class='card-title'> Card title</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>";
                        
        nameCard.innerHTML = descriptionUsers
    // }
};
usersCards();
function todos() {
    tableRow.innerHTML = "";
    for (i = 0; i < users.length; i++) {
            const columndata = "<td>" + users[i].name + "</td><td>" + users[i].occupation + "</td><td>" + users[i].age + "</td>";
            tableRow.innerHTML += columndata;
        }
    
}
function women() {
    const female = "Female";
    tableRow.innerHTML = "";
    for (i = 0; i < users.length; i++) {
        if (female === users[i].gender) {
            const columndata = "<td>" + users[i].name + "</td><td>" + users[i].occupation + "</td><td>" + users[i].age + "</td>";
            tableRow.innerHTML += columndata;
        }
    }
};

function age() {
    tableRow.innerHTML = "";
    for (i = 0; i < users.length; i++) {
        if (users[i].age > 19, users[i].age < 41) {
            const columndata = "<td>" + users[i].name + "</td><td>" + users[i].occupation + "</td><td>" + users[i].age + "</td>";
            tableRow.innerHTML += columndata;
        }
    }
};

window.todos = todos;
window.women = women;
window.age = age;





