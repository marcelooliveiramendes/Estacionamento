let modelo = document.querySelector('#modelo').value;
let placa = document.querySelector('#placa').value;

let salvarBtn = document.querySelector('.saveBtn');
let apagarBtn = document.querySelector('.apagarBtn');

salvarBtn.addEventListener('click', () => {
    validaDados(modelo, placa);

})

//valida se todos os campos estão preenchidos 
function validaDados(modelo, placa){
    if(modelo != "" || placa != ""){
        alert('Tudo certo!');
        salvar();
    } else {
        alert("Preencha todos os campos!");
    }
}

//salva veiculo
function salvar(){
        alert('carro salvo!');
}


