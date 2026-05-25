let scriptBaseUrl;

if (document.currentScript?.src) {
    scriptBaseUrl = new URL('.', document.currentScript.src);
} else {
    scriptBaseUrl = new URL('.', window.location.href);
}

async function carregarNavbar() {
    
    // Resolve o caminho a partir da pasta do app.js.
    const navbarUrl = new URL('../componentes/navbar.html', scriptBaseUrl);
    const resposta = await fetch(navbarUrl);

    if (!resposta.ok) {
        console.error('Erro ao carregar navbar');
        return;
    }

    const html = await resposta.text();

    document.getElementById('navbar').innerHTML = html;
}

carregarNavbar();