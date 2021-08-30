class Carro{
    constructor(){
        this.id = 1;
        this.arrayCarros = [];
    }

    salvar(){
        let carro = this.lerDados();

        if(this.validaCampos(carro)){
            this.adicionar(carro);
        }
        
        this.listarTabela();
        this.limpaCampos();
    }

    listarTabela(){
        let tbody = document.querySelector('tbody');
        tbody.innerText = "";
    

        for(let i = 0; i < this.arrayCarros.length; i++){
            
        }

    }

}

var carro = new Carro();