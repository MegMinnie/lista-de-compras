const botãoMais = document.querySelector(".bi-plus");
const botãoMenos = document.querySelector(".bi-dash");
const unidade = document.querySelector(".unidade");
const botaoAdicionarItem = document.querySelector("button");
const entrada = document.querySelector("input");
const lista = document.getElementById("lista");
let contador = 1;
let numeroItens = 0;

botãoMais.addEventListener("click", function () {
  contador++;
  unidade.innerHTML = `${contador}`;
});

botãoMenos.addEventListener("click", function () {
  if (contador > 1) {
    contador--;
    unidade.innerHTML = `${contador}`;
  }
});

botaoAdicionarItem.addEventListener("click", function () {
  let valorEntrada = entrada.value.trim();
  numeroItens++;

  if (valorEntrada !== "") {
    let novoItem = document.createElement("div");
    novoItem.id = `item-${numeroItens}`;
    novoItem.classList.add("lista");

    novoItem.innerHTML = `<p>${valorEntrada}</p> <p>${contador}</p>`;

    lista.appendChild(novoItem);
    entrada.value = "";
  }
});
