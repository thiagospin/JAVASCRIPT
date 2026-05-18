async function carregarNavbar() {
    const resposta = await fetch('./componentes/navbar.html');

    if (!resposta.ok) {
        console.error('Erro ao carregar navbar');
        return;
    }

    const html = await resposta.text();

    document.getElementById('navbar').innerHTML = html;
}

carregarNavbar();