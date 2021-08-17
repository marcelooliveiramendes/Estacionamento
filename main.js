

class Carro{
    constructor (){
        this.id = 1;
        this.arrayCarros = [];
    }
    
    salvar(){
        let carro = this.lerDados();

        if(this.validaCampos(carro)){
            alert('Salvar');
        }

        console.log(carro);
    }
    
    lerDados(){
        let carro = {};
        
        carro.id = this.id;
        carro.modelo = document.getElementsByClassName('modelo').value;
        carro.placa = document.getElementsByClassName('placa').value;
        
        return carro;
    }

    validaCampos(){
        let msg = '';
        
        if(carro.modelo == ''){
            msg += '- Informe o modelo do carro \n';   
        } 
        
        if (carro.placa == ''){
            msg += '- Informe a placa do carro \n';
        } 
        
        if(msg != ''){
            alert(msg);
            return false;
        }
        
        return true
    }
    cancelar(){
         alert('Vamos deletar esse carro!');
    }

}

var carro = new Carro;