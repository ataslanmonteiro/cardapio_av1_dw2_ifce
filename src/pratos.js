const totalComanda = document.querySelector('#total-comanda');

export const listaPratos = [];

export function valorComanda() {
    let total = 0;
    for (let prato of listaPratos) {
        total += prato.subtotal;
    }
    totalComanda.innerText = total.toLocaleString('pt-BR',{currency:"BRL",style:"currency"})
}