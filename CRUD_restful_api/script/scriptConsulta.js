var botaoConsulta = document.getElementById("btnConsulta");
document.getElementById("btnConsulta").addEventListener("click", consultaGet);

function consultaGet(event) {

    const valID = document.getElementById("consulta").value;
    const url_GET = `https://api.restful-api.dev/objects/${valID}`;

    axios.get(url_GET)
        .then(response => {
            console.log(response.data);
        })
}