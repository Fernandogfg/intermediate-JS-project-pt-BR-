let headerBtnDespesas = document.getElementById("header-btn-despesas");
let headerBtnCategorias = document.getElementById("header-btn-categorias");
let modalDespesas = document.getElementById("modal-add-despesas");
let modalCategorias = document.getElementById("categorias");
let modalAddCategorias = document.getElementById("add-categorias");
let btnAddDespesa = document.getElementById("btn-add-despesa");
let btnAddCategoria = document.getElementById("btn-add-categoria");
let btnSalvarDespesa = document.getElementById("btn-salvar-despesa");
let btnCancelarDespesa = document.getElementById("btn-cancelar-despesa");
let btnSalvarCategoria = document.getElementById("btn-salvar-categoria");
let btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");
let fadeDespesas = document.getElementById("fade-despesas");
let fadeAddCategorias = document.getElementById("fade-add-categorias");
let fadeCategorias = document.getElementById("fade-categorias");
let tabelaDespesas = document.getElementById("tabela-despesas");
let listaDespesas = [
  {
    dataVencimento: "18/03/2023",
    despesa: "lanche",
    valor: "127.58",
    status: true,
    categoria: "alimentação",
  },
  {
    dataVencimento: "01/03/2023",
    despesa: "viajem",
    valor: "17.58",
    status: false,
    categoria: "lazer",
  },
  {
    dataVencimento: "07/08/2022",
    despesa: "compras",
    valor: "79.2",
    status: false,
    categoria: "alimentação",
  },
  {
    dataVencimento: "10/10/2022",
    despesa: "cinema",
    valor: "50.0",
    status: true,
    categoria: "lazer",
  },
  {
    dataVencimento: "11/03/2023",
    despesa: "luz",
    valor: "150.00",
    status: true,
    categoria: "conta",
  },
];

//criação de funções

function alternaStatus(i) {
  listaDespesas[i].status = !listaDespesas[i].status;
  imprimeListaDespesas(listaDespesas);
}

function imprimeListaDespesas(lista) {
  tabelaDespesas.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    tabelaDespesas.innerHTML += `<tr class= '${
      lista[i].status ? "pago" : "pendente"
    }'>
    <td>${lista[i].dataVencimento}</td>
    <td>${lista[i].despesa}</td>
    <td>${lista[i].valor}</td>
    <td><button onclick='alternaStatus(${i})'>${
      lista[i].status ? "PAGO" : "PENDENTE"
    }</button></td>
  </tr>`;
  }
}

function alternaModal(modal) {
  modal.classList.toggle("inativo");
}

function escModal(modal) {
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      if (!modal.classList.contains("inativo")) {
        alternaModal(modal);
      }
    }
  });
}

//Chamadas de funções

imprimeListaDespesas(listaDespesas);

[btnAddDespesa, fadeDespesas].forEach((el) => {
  el.addEventListener("click", function () {
    alternaModal(modalDespesas);
    escModal(modalDespesas);
  });
});

[headerBtnCategorias, fadeCategorias].forEach((el) => {
  el.addEventListener("click", function () {
    alternaModal(modalCategorias);
    escModal(modalCategorias);
  });
});

[btnAddCategoria, fadeAddCategorias].forEach((el) => {
  el.addEventListener("click", function () {
    alternaModal(modalAddCategorias);
    escModal(modalAddCategorias);
  });
});
