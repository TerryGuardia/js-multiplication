let btnEntier = document.querySelector(".entier_n");
let table = document.querySelector('#myTable');
let cells = document.getElementsByTagName('td');
let row = table.insertRow();
let cell = row.insertCell();
let result;

btnEntier.addEventListener("click", (e) => {
    let valeurN = Number(prompt("Entrez un entier :"));


    while (!Number.isInteger(valeurN)) {
        alert("Veuillez rentrer un nombre entier");
        valeurN = Number(prompt("Entrez un entier :"));
    }

    multi(valeurN);
});


table.insertRow();
for (let i = 0; i < 11; i++) {
    row.insertCell();
}

function multi(valeurN) {

    for (let i = 1; i < 11; i++) {
        result = valeurN * i;
        console.log(result);
        cells[i].innerText = result;
    }
    cells[0].innerText = 'Table de ' + valeurN + ' : ';
}

let max = 10;
document.write("<table border='1'>");

document.write("<tr><td>X</td>");
for (let i = 1; i <= max; i++) {
    document.write("<td>", i, "</td>");
}

document.write("<tr>");

for (let i = 1; i <= max; i++) {
    document.write("<td>", i, "</td>");
    for (let j = 1; j <= max; j++) {
        document.write("<td>", i * j, "</td>");
    }

    document.write("</tr>");


}
document.write("</table>");


let longeur = document.querySelectorAll("td").length;
for (let i = max + 2; i <= longeur; i++) {
    if (i % (max + 2) === 0) {
        let cases = document.querySelectorAll("td")[i];
        cases.classList.add("case");
    }

}