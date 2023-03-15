let headerBtnDespesas = document.getElementById("header-btn-despesas");
let headerBtnCategorias = document.getElementById("header-btn-categorias");
let modalDespesas = document.getElementById("modal-add-despesas");
let containerCategorias = document.getElementById("categorias");
let modalAddCategorias = document.getElementById("add-categorias");
let modalEditarCategoria = document.getElementById('editar-categoria')
let tabelaDespesas = document.getElementById("tabela-despesas");
let containerLista = document.getElementById("container-lista");
let tabelaCategorias = document.getElementById("lista-categorias");
let fadeDespesas = document.getElementById("fade-despesas");
let fadeAddCategorias = document.getElementById("fade-add-categorias");
let fadeEditarCategoria = document.getElementById('fade-editar-categorias')
let btnAddDespesa = document.getElementById("btn-add-despesa");
let btnAddCategoria = document.getElementById("btn-add-categoria");
let btnSalvarDespesa = document.getElementById("btn-salvar-despesa");
let btnCancelarDespesa = document.getElementById("btn-cancelar-despesa");
let btnSalvarCategoria = document.getElementById("btn-salvar-categoria");
let btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");
let btnSalvarEdicao = document.getElementById('btn-salvar-edicao')
let btnCancelarEdicao = document.getElementById('btn-cancelar-edicao')
let inputAddCategoria = document.getElementById("input-add-categoria");
let inputEditarCategoria = document.getElementById('input-editar-categoria')
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

function identificaCategoria(id) {
  let nomecategoria = listaCategorias.filter((categoria) => categoria.id == id);
  return nomecategoria[0].nome;
}

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

function imprimeListaCategorias(lista) {
  tabelaCategorias.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    tabelaCategorias.innerHTML += `<tr>
    <td>${lista[i].id}</td>
    <td>${lista[i].nome}</td>
    <td class="container-btns">
    <button class="btn" onclick='editaCategoria(${i})'>EDITAR</button>
    <button onclick='removeElemento(${i})' class="btn-vermelho">EXCLUIR</button></td>
    </tr>`;
  }
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

function gerarIdCategoria() {
  return Math.round(Date.now() / 1000);
}

function addCategoria() {
  let categoria = {
    nome: "",
    id: gerarIdCategoria(),
  };
  categoria.nome = inputAddCategoria.value;
  listaCategorias.push(categoria);
}

function removeElemento(i) {
  listaCategorias.splice(i, 1);
  imprimeListaCategorias(listaCategorias);
}
function editaCategoria(i){
  alternaModal(modalEditarCategoria)
  inputEditarCategoria.value = listaCategorias[i].nome
  escModal(modalEditarCategoria)
  salvarEdicao(i)
  
}
function salvarEdicao(i){
    btnSalvarEdicao.addEventListener('click', function(){
      listaCategorias[i].nome = inputEditarCategoria.value
      alternaModal(modalEditarCategoria)
      imprimeListaCategorias(listaCategorias)
      imprimeListaDespesas(listaDespesas)

  })
}
//Chamadas de funções

imprimeListaDespesas(listaDespesas);
imprimeListaCategorias(listaCategorias);

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

btnSalvarCategoria.addEventListener("click", function () {
  addCategoria();
  imprimeListaCategorias(listaCategorias);
  alternaModal(modalAddCategorias);
});
fadeEditarCategoria.addEventListener('click', function(){
  alternaModal(modalEditarCategoria)
})

