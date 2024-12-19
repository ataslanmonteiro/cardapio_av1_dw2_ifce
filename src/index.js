import { criarCardPrato } from "./components.js";
import {listaPratos } from "./pratos.js";

let teste = { titulo: "bife", descricao: "carne", preco: 10 };

const main = document.querySelector("main");
const principais = document.querySelector(".c-principais");
const sobremesas = document.querySelector(".c-sobremesas");

async function consultarWebAPI() {
  const url = "http://10.100.104.203:3001/menu";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    for (let pratoInfo of json.principais) {
        const prato = criarCardPrato(pratoInfo);
        listaPratos.push(prato);
        principais.append(prato.nodeElem);
    }
    
    for (let pratoInfo of json.sobremesas) {
        const prato = criarCardPrato(pratoInfo);
        listaPratos.push(prato);
        sobremesas.append(prato.nodeElem);
    }

  } catch (error) {
    alert('A API Web parece estar offline');
    console.error(error.message);
  }
}

consultarWebAPI();
