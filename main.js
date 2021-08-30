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
            let tr = tbody.insertRow();

            let td_modelo = tr.insertCell();
            let td_placa = tr.insertCell();
            let td_entrada = tr.insertCell();
            let td_btn = tr.insertCell();

            td_modelo.innerText = this.arrayCarros[i].modelo;
            td_placa.innerText = this.arrayCarros[i].placa;
            td_entrada.innerText = '30/08/2021 18:00';
            td_btn.innerHTML = '<button onclick="carro.concluir('+ this.arrayCarros[i].id +')">Concluir</button>';

            console.log(this.arrayCarros);
        }
    }

    adicionar(carro){
        this.arrayCarros.push(carro);
        this.id++;
    }

    lerDados(){
        let carro = {}

        carro.id = this.id;
        carro.modelo = document.getElementById('modelo').value;
        carro.placa = document.getElementById('placa').value;

        return carro;
    }

    validaCampos(carro){
        let msg = '';

        if(carro.modelo == ''){
            msg += '- Informe o modelo do carro! \n'
        }

        if(carro.placa == ''){
            msg += '- Informe a placa do carro! \n'
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }
}

var carro = new Carro();