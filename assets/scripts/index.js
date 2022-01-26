let countList = 0;
let lista = [];
const input = document.getElementById("inputTexto");
const itens = document.getElementById("ul");
const btnCriar = document.getElementById("btn-criar");
btnCriar.addEventListener("click", createItem);

function remove(item) {
  const remItem = document.getElementById(item).textContent.split(" ");
  let index = lista.indexOf(remItem[1]);

  lista.splice(index, 1);

  document.getElementById(item).remove();
  input.value = "";
  input.focus();
}

function createItem() {
  if (input.value === "") {
    alert("Caixa de texto vazia, favor digitar um item!");
  } else if (!lista.includes(input.value)) {
    lista.push(input.value);

    const li = `<li id='item-${countList}' class="list-group-item d-flex justify-content-between align-items-center">
     ${input.value} <button id="btn-${countList}" class="btn btn btn-danger" onclick="remove('item-${countList}')"><i class="fas fa-trash"></i></button>`;

    itens.insertAdjacentHTML("beforeend", li);

    countList++;
  } else {
    alert("Item já consta na lista, favor adicionar outro item!");
  }

  input.value = "";
  input.focus();
}