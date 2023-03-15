let headerBtnDespesas = document.getElementById("header-btn-despesas");
let headerBtnCategorias = document.getElementById("header-btn-categorias");
let modalDespesas = document.getElementById("modal-add-despesas");
let containerCategorias = document.getElementById("categorias");
let modalAddCategorias = document.getElementById("add-categorias");
let btnAddDespesa = document.getElementById("btn-add-despesa");
let btnAddCategoria = document.getElementById("btn-add-categoria");
let btnSalvarDespesa = document.getElementById("btn-salvar-despesa");
let btnCancelarDespesa = document.getElementById("btn-cancelar-despesa");
let btnSalvarCategoria = document.getElementById("btn-salvar-categoria");
let btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");
let fadeDespesas = document.getElementById("fade-despesas");
let fadeAddCategorias = document.getElementById("fade-add-categorias");
let tabelaDespesas = document.getElementById("tabela-despesas");
let containerLista = document.getElementById("container-lista");
let tabelaCategorias = document.getElementById("lista-categorias");
let listaCategorias = [
  {
    nome: "Alimentação",
    id: "1010232322",
  },
  {
    nome: "Lazer",
    id: "1010232323",
  },
  {
    nome: "Conta",
    id: "1010232324",
  },
];
let listaDespesas = [
  {
    dataVencimento: "18/03/2023",
    despesa: "lanche",
    valor: "127.58",
    status: true,
    categoria: "1010232322",
  },
  {
    dataVencimento: "01/03/2023",
    despesa: "viajem",
    valor: "17.58",
    status: false,
    categoria: "1010232323",
  },
  {
    dataVencimento: "07/08/2022",
    despesa: "compras",
    valor: "79.2",
    status: false,
    categoria: "1010232322",
  },
  {
    dataVencimento: "10/10/2022",
    despesa: "cinema",
    valor: "50.0",
    status: true,
    categoria: "1010232323",
  },
  {
    dataVencimento: "11/03/2023",
    despesa: "luz",
    valor: "150.00",
    status: true,
    categoria: "1010232324",
  },
  {
    dataVencimento: "18/03/2023",
    despesa: "lanche",
    valor: "127.58",
    status: true,
    categoria: "1010232322",
  },
  {
    dataVencimento: "01/03/2023",
    despesa: "viajem",
    valor: "17.58",
    status: false,
    categoria: "1010232323",
  },
  {
    dataVencimento: "07/08/2022",
    despesa: "compras",
    valor: "79.2",
    status: false,
    categoria: "1010232322",
  },
  {
    dataVencimento: "10/10/2022",
    despesa: "cinema",
    valor: "50.0",
    status: true,
    categoria: "1010232323",
  },
  {
    dataVencimento: "11/03/2023",
    despesa: "luz",
    valor: "150.00",
    status: true,
    categoria: "1010232324",
  },
];

//criação de funções

function identificaCategoria (id){
  let nomecategoria = listaCategorias.filter(categoria => categoria.id == id)
  return nomecategoria[0].nome
}
console.log(identificaCategoria("1010232324"))
function alternaStatus(i) {
  listaDespesas[i].status = !listaDespesas[i].status;
  imprimeListaDespesas(listaDespesas);
}

function imprimeListaCategorias(lista) {
  tabelaCategorias.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    tabelaCategorias.innerHTML += `<tr>
    <td>${lista[i].id}</td>
    <td>${lista[i].nome}</td>
    <td class="container-btns"><button class="btn">EDITAR</button><button class="btn-vermelho">EXCLUIR</button></td>
    </tr>`;
  }
}

function imprimeListaDespesas(lista) {
  tabelaDespesas.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    tabelaDespesas.innerHTML += `<tr class= '${
      lista[i].status ? "pago" : "pendente"
    }'>
    <td>${lista[i].dataVencimento}</td>
    <td>${lista[i].despesa}</td>
    <td>${identificaCategoria(lista[i].categoria)}</td>
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
imprimeListaCategorias(listaCategorias)

headerBtnCategorias.addEventListener("click", function () {
  if (containerCategorias.classList.contains("inativo")) {
    alternaModal(containerCategorias);
    alternaModal(containerLista);
  }
});

headerBtnDespesas.addEventListener("click", function () {
  if (containerLista.classList.contains("inativo")) {
    alternaModal(containerCategorias);
    alternaModal(containerLista);
  }
});

[btnAddDespesa, fadeDespesas].forEach((el) => {
  el.addEventListener("click", function () {
    alternaModal(modalDespesas);
    escModal(modalDespesas);
  });
});

[btnAddCategoria, fadeAddCategorias].forEach((el) => {
  el.addEventListener("click", function () {
    alternaModal(modalAddCategorias);
    escModal(modalAddCategorias);
  });
});

function gerarIdCategoria (){
  listaCategorias[listaCategorias.length-1].id
}