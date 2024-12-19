import { listaPratos, valorComanda } from "./pratos.js";

class CardPrato {
  // variáveis públicas.

  nodeElem = document.createElement("div");
  tituloElem = document.createElement("h2");
  tituloContainer = document.createElement("div");
  descricaoElem = document.createElement("p");
  precoElem = document.createElement("span");
  btnContainer = document.createElement("div");
  qtdElem = document.createElement("span");
  pedirBtn = document.createElement("button");

  qtd = 0;
  preco = 0;

  // construtor
  constructor(info) {
    this.tituloElem.innerText = info.titulo;
    this.tituloElem.classList.add("titulo__head");

    this.precoElem.innerText = info.preco;
    this.precoElem.classList.add("titulo__preco");

    this.preco = parseFloat(info.preco);

    this.tituloContainer.classList.add("titulo");
    this.tituloContainer.append(this.tituloElem, this.precoElem);

    this.descricaoElem.innerText = info.descricao;
    this.descricaoElem.classList.add("descricao");

    this.qtdElem.classList.add("pedidos__qtd");
    this.qtdElem.innerText = 0;

    this.nodeElem.classList.add("prato");

    this.pedirBtn.innerText = "Pedir";
    this.pedirBtn.classList.add("pedidos__btn");

    this.pedirBtn.onclick = () => {
      this.qtd += 1;
      this.qtdElem.innerText = this.qtd;
      valorComanda();
    };

    this.diminuirBtn.innerText = "Diminuir";
    this.diminuirBtn.classList.add("pedidos__btn");
    this.diminuirBtn.onclick = () => {
      if (this.qtd > 0) {
        this.qtd -= 1;
        this.qtdElem.innerText = this.qtd;
        valorComanda();
      }
    };

    this.zerarBtn.innerText = "Zerar";
    this.zerarBtn.classList.add("pedidos__btn");
    this.zerarBtn.onclick = () => {
      this.qtd = 0;
      this.qtdElem.innerText = this.qtd;
      valorComanda();
    };

    this.btnContainer.classList.add("pedidos");

    this.btnContainer.append(this.pedirBtn, this.qtdElem);
    this.nodeElem.append(
      this.tituloContainer,
      this.descricaoElem,
      this.btnContainer
    );
  }

  get container() {
    return this.nodeElem;
  }

  get subtotal() {
    return this.qtd * this.preco;
  }
}

export function criarCardPrato(info) {
  const cardObjeto = new CardPrato(info);
  return cardObjeto;
}
