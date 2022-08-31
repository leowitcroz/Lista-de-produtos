class Produtos {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }

  salvar() {
    let produtos = this.lerDados();

    if (this.validaCampos(produtos)) {
        if(this.editId == null){
            this.adicionar(produtos);
        }else{
            this.atualizar(this.editId,produtos)
        }
      
      console.log(this.arrayProdutos);
    }

    

    this.listaTabela();
    this.cancelar();
  }

  adicionar(produtos) {
    this.arrayProdutos.push(produtos);
    this.id++;
  }

  listaTabela() {
    let tr = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();

      let td_acao = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_valor.innerText = this.arrayProdutos[i].valor;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "images/editar-texto.png";
      imgEdit.setAttribute("onclick", "produto.editar( " + JSON.stringify(this.arrayProdutos[i])+ ")"
      );

      td_acao.appendChild(imgEdit);

      let imgDelete = document.createElement("img");
      imgDelete.src = " images/excliu.png";
      imgDelete.setAttribute(
        "onclick",
        "produto.deletar( " + this.arrayProdutos[i].id + ")"
      );

      td_acao.appendChild(imgDelete);

      console.log(this.arrayProdutos);
    }
  }

  atualizar(id , produtos){

    for(let i = 0; i < this.arrayProdutos.length; i++){

        if(this.arrayProdutos[i].id == id){

            this.arrayProdutos[i].nomeProduto = produtos.nomeProduto
            this.arrayProdutos[i].valor = produtos.valor
        }
    }
  }


  lerDados() {
    let produtos = {};

    produtos.id = this.id;
    produtos.nomeProduto = document.getElementById("produto").value;
    produtos.valor = document.getElementById("valor").value;

    return produtos;
  }

  validaCampos(produtos) {
    let mensagem = "";

    if (produtos.nomeProduto == "") {
      mensagem += "-informe o nome do produtos \n";
    }
    if (produtos.valor == "") {
      mensagem += "-informe o valor do produto";
    }

    if (mensagem != "") {
      alert(mensagem);
      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("btn1").innerText = "Salvar";
    this.editId = null;
  }
  deletar(id) {
    if (confirm("deseja realmente deletar" + id)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);

          tbody.deleteRow(i);
        }
      }
    }
  }


  editar(dados){
    this.editId = dados.id


    document.getElementById('produto').value = dados.nomeProduto;
    document.getElementById('valor').value = dados.valor;
    document.getElementById('btn1').innerText = 'Atualizar'
  }

}

let produto = new Produtos();
