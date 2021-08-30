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

}

var carro = new Carro();