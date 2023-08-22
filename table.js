import { elementos_tabela_periodica } from "./elements.js";
import { simbolos_tabela_periodica } from "./elements.js";
import { number_at } from "./elements.js";
import { massa_at } from "./elements.js";

function enviar(element) {
    let elemento = document.getElementById(element).innerHTML;
    for (let i = 0; i < elementos_tabela_periodica.length; i++) {
        if (elemento == elementos_tabela_periodica[i]) {
            let sigla = simbolos_tabela_periodica[i];
            let num = number_at[i];
            let mass = massa_at[i];
            alert(`A sigla do elemento ${elemento} é : ${sigla}, seu número atômico é : ${num} e sua massa atômica é : ${mass}`)
        }
    }
}

const container = document.body;

for (let i = 0; i < elementos_tabela_periodica.length; i++) {
    const paragraph = document.createElement("p");
    paragraph.id = elementos_tabela_periodica[i];
    paragraph.textContent = elementos_tabela_periodica[i];
    paragraph.onclick = function () { enviar(elementos_tabela_periodica[i]) };
    container.appendChild(paragraph);

}