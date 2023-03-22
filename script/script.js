let headerBtnDespesas = document.getElementById("header-btn-despesas");
let headerBtnCategorias = document.getElementById("header-btn-categorias");
let modalDespesas = document.getElementById("modal-add-despesas");
let containerCategorias = document.getElementById("categorias");
let modalAddCategorias = document.getElementById("add-categorias");
let modalEditarCategoria = document.getElementById("editar-categoria");
let tabelaDespesas = document.getElementById("tabela-despesas");
let containerLista = document.getElementById("container-lista");
let tabelaCategorias = document.getElementById("lista-categorias");
let fadeDespesas = document.getElementById("fade-despesas");
let fadeAddCategorias = document.getElementById("fade-add-categorias");
let fadeEditarCategoria = document.getElementById("fade-editar-categorias");
let btnAddDespesa = document.getElementById("btn-add-despesa");
let btnAddCategoria = document.getElementById("btn-add-categoria");
let btnSalvarDespesa = document.getElementById("btn-salvar-despesa");
let btnCancelarDespesa = document.getElementById("btn-cancelar-despesa");
let btnSalvarCategoria = document.getElementById("btn-salvar-categoria");
let btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");
let btnSalvarEdicao = document.getElementById("btn-salvar-edicao");
let btnCancelarEdicao = document.getElementById("btn-cancelar-edicao");
let inputAddCategoria = document.getElementById("input-add-categoria");
let inputEditarCategoria = document.getElementById("input-editar-categoria");
let inputFiltroDespesa = document.getElementById("input-filtro-despesa");
let btnFiltrarDespesas = document.getElementById("btn-filtrar-despesas");
let inputFiltroCategorias = document.getElementById("input-filtro-categorias");
let btnFiltrarCategorias = document.getElementById("btn-filtrar-categorias");
let buscaCategoria = document.getElementById("busca-categoria");
let dataVencimento = document.getElementById("data-vencimento");
let inputNomeDespesa = document.getElementById("nome-despesa");
let inputValorDespesa = document.getElementById("valor-despesa");
let qntAtrasadas = document.getElementById("qnt-atrasado");
let qntPagar = document.getElementById("qnt-pagar");
let qntPago = document.getElementById("qnt-pago");
let msgErroCat = document.getElementById("msg-erro-cat");
let msgErroAddDespesa = document.getElementById("msg-erro-add-despesa");
let msgErroAddCategoria = document.getElementById("msg-erro-add-categoria");
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
    id: "0",
  },
  {
    dataVencimento: "01/03/2023",
    despesa: "viajem",
    valor: "17.58",
    status: false,
    categoria: "1010232323",
    id: "1",
  },
  {
    dataVencimento: "07/08/2022",
    despesa: "compras",
    valor: "79.2",
    status: false,
    categoria: "1010232322",
    id: "2",
  },
  {
    dataVencimento: "10/10/2022",
    despesa: "cinema",
    valor: "50.0",
    status: true,
    categoria: "1010232323",
    id: "3",
  },
  {
    dataVencimento: "11/03/2023",
    despesa: "luz",
    valor: "150.00",
    status: true,
    categoria: "1010232324",
    id: "4",
  },
  {
    dataVencimento: "18/03/2023",
    despesa: "lanche",
    valor: "127.58",
    status: true,
    categoria: "1010232322",
    id: "5",
  },
  {
    dataVencimento: "01/03/2023",
    despesa: "viajem",
    valor: "17.58",
    status: false,
    categoria: "1010232323",
    id: "6",
  },
];

//criação de funções

function identificaCategoria(id) {
  let nomecategoria = listaCategorias.filter((categoria) => categoria.id == id);
  return nomecategoria[0].nome;
}

function identificaIndexDespesas(id) {
  return listaDespesas.findIndex((despesa) => despesa.id == id);
}
function identificaIndexCategoria(id) {
  return listaCategorias.findIndex((categoria) => categoria.id == id);
}
function alternaStatus(id) {
  if (inputFiltroDespesa.value == "") {
    let statusAlternado = listaDespesas.find((desp) => desp.id == id);
    listaDespesas[listaDespesas.indexOf(statusAlternado)].status =
      !listaDespesas[listaDespesas.indexOf(statusAlternado)].status;
    imprimeListaDespesas(listaDespesas);
    contagemDespesas();
  } else {
    let statusAlternado = listaDespesas.find((desp) => desp.id == id);
    listaDespesas[listaDespesas.indexOf(statusAlternado)].status =
      !listaDespesas[listaDespesas.indexOf(statusAlternado)].status;
    filtrarDespesas();
    contagemDespesas();
  }
}

function imprimeListaDespesas(lista) {
  if (lista.length == 0) {
    tabelaDespesas.innerHTML =
      "<tr><td>-</td><td>-</td><td>-</td><td>-</td></tr>";
  } else {
    tabelaDespesas.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
      tabelaDespesas.innerHTML += `<tr class= '${
        lista[i].status ? "pago" : "pendente"
      }'>
    <td>${lista[i].dataVencimento}</td>
    <td>${lista[i].despesa}</td>
    <td>${identificaCategoria(lista[i].categoria)}</td>
    <td>R$ ${Number(lista[i].valor).toFixed(2)}</td>
    <td><button onclick='alternaStatus(${lista[i].id})'>${
        lista[i].status ? "PAGO" : "PENDENTE"
      }</button><img onclick='removeDespesa(${
        lista[i].id
      })' class='lixeira' src="../assets/icons/icons8-remover.svg"></td>
    </tr>`;
    }
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
    <button class="btn" onclick='editaCategoria(${lista[i].id})'>EDITAR</button>
    <button onclick='removeCategoria(${lista[i].id})' class="btn-vermelho">EXCLUIR</button></td>
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

function gerarId() {
  return Math.round(Date.now() / 1000);
}

function formatarData(data = "") {
  let dia = data.slice(8);
  console.log(dia);
  let mes = data.slice(5, 7);
  console.log(mes);
  let ano = data.slice(0, 4);
  console.log(ano);
  return `${dia}/${mes}/${ano}`;
}

function addCategoria() {
  let categoria = {
    nome: "",
    id: gerarId(),
  };
  if (inputAddCategoria.value == "") {
    msgErroAddCategoria.classList.toggle("inativo");
    setTimeout(() => msgErroAddCategoria.classList.toggle("inativo"), 3000);
  } else {
    categoria.nome = inputAddCategoria.value;
    listaCategorias.push(categoria);
    imprimeListaCategorias(listaCategorias);
    alternaModal(modalAddCategorias);
  }
}

function listarCategorias() {
  buscaCategoria.innerHTML = `<option value=""></option>`;
  for (let i = 0; i < listaCategorias.length; i++) {
    buscaCategoria.innerHTML += `<option value="${listaCategorias[i].id}">${listaCategorias[i].nome}</option>`;
  }
}

function addDespesa() {
  if (
    buscaCategoria.value == "" ||
    dataVencimento.value == "" ||
    inputNomeDespesa.value == "" ||
    inputValorDespesa.value == ""
  ) {
    msgErroAddDespesa.classList.toggle("inativo");
    setTimeout(() => msgErroAddDespesa.classList.toggle("inativo"), 3000);
  } else {
    let novaDespesa = {
      dataVencimento: formatarData(dataVencimento.value),
      despesa: inputNomeDespesa.value,
      valor: inputValorDespesa.value,
      status: false,
      categoria: buscaCategoria.value,
      id: gerarId(),
    };
    listaDespesas.push(novaDespesa);
    imprimeListaDespesas(listaDespesas);
    alternaModal(modalDespesas);
    contagemDespesas();
  }
}

function removeCategoria(id) {
  let catErro = listaDespesas.filter((despesa) => despesa.categoria == id);
  if (catErro.length == 0) {
    if (inputFiltroCategorias.value == "") {
      let categoriaRemovida = listaCategorias.find((cat) => cat.id == id);
      listaCategorias.splice(listaCategorias.indexOf(categoriaRemovida), 1);
      imprimeListaCategorias(listaCategorias);
    } else {
      let categoriaRemovida = listaCategorias.find((cat) => cat.id == id);
      listaCategorias.splice(listaCategorias.indexOf(categoriaRemovida), 1);
      filtrarCategorias();
    }
  } else {
    msgErroCat.classList.toggle("inativo");
    msgErroCat.innerHTML = `Descupe mas ainda há despesas relacionadas a categoria "${identificaCategoria(
      id
    )}"`;
    setTimeout(() => {
      msgErroCat.classList.toggle("inativo");
    }, 3000);
  }
}

function removeDespesa(id) {
  if (inputFiltroDespesa.value == "") {
    let despesaRemovida = listaDespesas.find((desp) => desp.id == id);
    listaDespesas.splice(listaDespesas.indexOf(despesaRemovida), 1);
    imprimeListaDespesas(listaDespesas);
    contagemDespesas();
  } else {
    let despesaRemovida = listaDespesas.find((desp) => desp.id == id);
    listaDespesas.splice(listaDespesas.indexOf(despesaRemovida), 1);
    filtrarDespesas();
    contagemDespesas();
  }
}
function editaCategoria(id) {
  btnSalvarEdicao.setAttribute("onclick", `salvarEdicao(${id})`);
  alternaModal(modalEditarCategoria);
  inputEditarCategoria.value = listaCategorias.find(
    (categoria) => categoria.id == id
  ).nome;
  escModal(modalEditarCategoria);
}

function salvarEdicao(id) {
  listaCategorias.map((categoria) => {
    if (categoria.id == id) {
      categoria.nome = inputEditarCategoria.value;
    }
  });
  alternaModal(modalEditarCategoria);
  imprimeListaCategorias(listaCategorias);
  imprimeListaDespesas(listaDespesas);
}

function filtrarDespesas() {
  let listaFiltrada = listaDespesas.filter((despesa) => {
    if (
      despesa.dataVencimento.includes(inputFiltroDespesa.value) ||
      despesa.despesa
        .toLocaleLowerCase()
        .includes(inputFiltroDespesa.value.toLocaleLowerCase()) ||
      identificaCategoria(despesa.categoria)
        .toLocaleLowerCase()
        .includes(inputFiltroDespesa.value.toLocaleLowerCase()) ||
      despesa.valor.includes(inputFiltroDespesa.value)
    ) {
      let novaDespesa = {
        dataVencimento: despesa.dataVencimento,
        despesa: despesa.despesa,
        categoria: despesa.categoria,
        valor: despesa.valor,
        status: despesa.status,
      };
      return novaDespesa;
    }
  });
  imprimeListaDespesas(listaFiltrada);
}
function filtrarCategorias() {
  let listaFiltrada = listaCategorias.filter((categoria) => {
    if (
      categoria.nome
        .toLocaleLowerCase()
        .includes(inputFiltroCategorias.value.toLocaleLowerCase()) ||
      categoria.id.includes(inputFiltroCategorias.value)
    ) {
      let novaCategoria = {
        nome: categoria.nome,
        id: categoria.id,
      };
      return novaCategoria;
    }
  });
  imprimeListaCategorias(listaFiltrada);
}
function contagemAtrasadas() {
  let hoje = new Date();
  let dia = String(hoje.getDate()).padStart(2, "0");
  let mes = String(hoje.getMonth() + 1).padStart(2, "0");
  let ano = String(hoje.getFullYear());
  let atrasadas = listaDespesas.filter((despesa) => {
    if (!despesa.status) {
      if (Number(despesa.dataVencimento.slice(6)) < Number(ano)) {
        return despesa;
      } else if (Number(despesa.dataVencimento.slice(6)) == Number(ano)) {
        if (Number(despesa.dataVencimento.slice(3, 5)) < Number(mes)) {
          return despesa;
        } else if (Number(despesa.dataVencimento.slice(3, 5)) == Number(mes)) {
          if (Number(despesa.dataVencimento.slice(0, 2)) < Number(dia)) {
            return despesa;
          }
        }
      }
    }
  });
  qntAtrasadas.innerHTML = `${atrasadas.length}`;
}

function contagemPagar() {
  let valor = 0;
  for (let i = 0; i < listaDespesas.length; i++) {
    if (!listaDespesas[i].status) {
      valor += Number(listaDespesas[i].valor);
    }
  }
  qntPagar.innerHTML = `${valor.toFixed(2)}`;
}

function contagemPago() {
  let valor = 0;
  for (let i = 0; i < listaDespesas.length; i++) {
    if (listaDespesas[i].status) {
      valor += Number(listaDespesas[i].valor);
    }
  }
  qntPago.innerHTML = `R$ ${valor.toFixed(2)}`;
}
function contagemDespesas() {
  contagemAtrasadas();
  contagemPagar();
  contagemPago();
}

//Chamadas de funções
contagemDespesas();
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
  inputAddCategoria.value = "";
});
fadeEditarCategoria.addEventListener("click", function () {
  alternaModal(modalEditarCategoria);
});

btnFiltrarDespesas.addEventListener("click", function () {
  filtrarDespesas();
});
btnFiltrarCategorias.addEventListener("click", function () {
  filtrarCategorias();
});
inputFiltroDespesa.addEventListener("keydown", function (el) {
  if (el.key == "Enter") {
    filtrarDespesas();
  }
});

inputFiltroCategorias.addEventListener("keydown", function (el) {
  if (el.key == "Enter") {
    filtrarCategorias();
  }
});

btnAddDespesa.addEventListener("click", function () {
  listarCategorias();
  inputNomeDespesa.value = "";
  dataVencimento.value = "";
  buscaCategoria.value = "";
  inputValorDespesa.value = "";
});
// btnSalvarDespesa
btnSalvarDespesa.addEventListener("click", function () {
  addDespesa();
});
btnCancelarCategoria.addEventListener("click", function () {
  alternaModal(modalAddCategorias);
});
btnCancelarDespesa.addEventListener("click", function () {
  alternaModal(modalDespesas);
});
btnCancelarEdicao.addEventListener("click", function () {
  alternaModal(modalEditarCategoria);
});
