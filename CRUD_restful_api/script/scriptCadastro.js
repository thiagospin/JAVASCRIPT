var botaoSubmeter = document.getElementById("formPut");
document.getElementById("formPut").addEventListener("submit", transformar);


function transformar() {
    
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(typeof (formDataObj));
    var dadosFinais = finalizaJson(formDataObj);

    const url = "https://api.restful-api.dev/objects";
    axios.post(url, dadosFinais)
        .then(response => {
            console.log(response);
            console.log(`Status da chamada: ${response.status}`);
            console.log(`ID do produto cadastrado: ${response.data.id}`)
            listarID(response.data.name, response.data.id);
        })
}

function finalizaJson(obj) {

    var valNome = document.getElementById("nome").value;

    var dadosPut = {
        "name": valNome,
        "data": obj
    }

    return dadosPut;
}

function listarID(nome, id) {

    console.log("Iniciando listagem");
    const elementoAvo = document.getElementById("listagem");
    
    var elementoFilhoLinha = document.createElement('div');
    elementoAvo.appendChild(elementoFilhoLinha);

    var elementoNetoCol1 = document.createElement('div');
    elementoNetoCol1.innerHTML = nome;

    var elementoNetoCol2 = document.createElement('div');
    elementoNetoCol2.innerHTML = id;

    elementoFilhoLinha.appendChild(elementoNetoCol1);
    elementoFilhoLinha.appendChild(elementoNetoCol2);


    elementoFilhoLinha.classList.add("row");
    elementoNetoCol1.classList.add("col");
    elementoNetoCol2.classList.add("col");
}
