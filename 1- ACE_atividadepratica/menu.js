// COLETA
let btnColeta = document.getElementById("coleta")
let btnColetaMobile = document.getElementById("coleta-m")
let coleta = document.getElementById("coletaseletiva")

// TOPO DO SITE
let btnTopo = document.getElementById("topo-do-site")
let btnTopoMobile = document.getElementById("topo-do-site-m")
let topo = document.getElementById("topo")

// PONTOS DE COLETA
let btnPontos = document.getElementById("sobre")
let btnPontosMobile = document.getElementById("sobre-m")
let pontos = document.getElementById("sobreColeta")

// CONSCIENTIZE-SE
let btnConscientize = document.getElementById("conscientize-se")
let btnConscientizeMobile = document.getElementById("conscientize-se-m")
let conscientize = document.getElementById("conscientize")

function navegar(section) {
    section.scrollIntoView({behavior: 'smooth'})
}

function handleClick(botao, section) {
    botao.addEventListener('click', () => {
        fecharMenuMobile()
        navegar(section)
    })
}

handleClick(btnColeta, coleta)
handleClick(btnTopo, topo)
handleClick(btnPontos,  pontos)
handleClick(btnConscientize , conscientize)

handleClick(btnColetaMobile, coleta)
handleClick(btnTopoMobile, topo)
handleClick(btnPontosMobile,  pontos)
handleClick(btnConscientizeMobile , conscientize)


let btnFechar = document.getElementById('btn-fechar');
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Alterna entre abrir e fechar o menu
btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('abrir-menu')) {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none'; // Esconde o overlay
    } else {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block'; // Mostra o overlay
    }
});

function fecharMenuMobile() {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
}

// Fecha o menu quando o usuário clica no overlay
overlay.addEventListener('click', fecharMenuMobile);


// Fecha o menu quando o usuário clica no botão X
btnFechar.addEventListener('click', fecharMenuMobile);






// Seleciona todas as caixas da seção coletaseletiva (faz parte da animação coleta seletiva que está no CSS)

const boxes = document.querySelectorAll('.coletaseletiva-box');

// Função para ativar a animação quando o elemento entra na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe 'show' quando entra na viewport
        }
    });
}, {
    threshold: 0.5 // Dispara quando 50% do elemento estiver visível
});

// Observa cada caixa
boxes.forEach(box => {
    observer.observe(box);
});
