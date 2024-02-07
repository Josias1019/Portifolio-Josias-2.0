// Adicionar funcionalidade para as setas
    $('.prev').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.next').on('click', function () {
        $('.slider').slick('slickNext');
    });

// translation.js
const translations = {
    'en': {
        pageTitle: 'Welcome to Your Site',
        mainContent: 'This is the main content of your site.',
        footerText: '© Your Site'
    },
    'pt': {
        pageTitle: 'Bem-vindo ao Seu Site',
        mainContent: 'Este é o conteúdo principal do seu site.',
        footerText: '© Seu Site'
    },
    'es': {
        pageTitle: 'Bienvenido a Tu Sitio',
        mainContent: 'Este es el contenido principal de tu sitio.',
        footerText: '© Tu Sitio'
    }
};

// Detectar o idioma do navegador e configurar o idioma padrão
const userLanguage = navigator.language.split('-')[0];
const currentLanguage = translations[userLanguage] ? userLanguage : 'en';

// SPRIT PARA LEVAR AS DIV

        // Aguarda o carregamento completo da página
        document.addEventListener("DOMContentLoaded", function () {
            // Seleciona todos os itens do menu principal
            var menuItems = document.querySelectorAll('.menu-li');

            // Adiciona um evento de clique a cada item do menu principal
            menuItems.forEach(function (menuItem) {
                menuItem.addEventListener('click', function () {
                    // Toggle para exibir ou ocultar o submenu correspondente
                    var submenu = this.nextElementSibling;
                    submenu.classList.toggle('show');
                });
            });
        });

        document.querySelectorAll('a[href^=".cursos"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });

// FIM LEVAR AS DIV

// SCRIPT SLIDER

$(document).ready(function () {
    $(".slider").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//FIM SLIDER

// ITENS CONTEÚDO FICAR VISIVEL QUAND O SCROLL DESCER

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".section, .section-cursos");

    function revealSection() {
        sections.forEach(function (section) {
            if (isElementInViewport(section, 150, 100)) {
                section.classList.add("content-visible");
            } else {
                section.classList.remove("content-visible");
            }
        });
    }

    function isElementInViewport(el, start, end) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - start &&
            rect.bottom >= end
        );
    }

    document.addEventListener("scroll", revealSection);
    revealSection(); // Para exibir os conteúdos visíveis inicialmente
});

//FIM CONTEÚDO FICAR VISIVEL

// BOTÃO SUBIR PARA O TOPO DO SITE

document.addEventListener("DOMContentLoaded", function () {
    // Função para rolar suavemente para o topo
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rola suavemente
        });
    }

    // Seleciona todos os botões com a classe "btnTopo"
    var btnTopoElements = document.querySelectorAll(".btnTopo");

    // Adiciona um listener de evento de clique a todos os botões "topo"
    btnTopoElements.forEach(function (btnTopo) {
        btnTopo.addEventListener("click", function () {
            scrollToTop(); // Chama a função de rolagem suavemente
        });
    });
});

// FIM BOTÃO