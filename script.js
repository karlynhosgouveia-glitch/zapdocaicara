/*==========================
NAVBAR
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(6,30,56,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.18)";

    } else {

        header.style.background = "rgba(8,30,56,.65)";
        header.style.boxShadow = "none";

    }

});


/*==========================
ANIMAÇÃO AO ENTRAR NA TELA
==========================*/

const elementos = document.querySelectorAll(".card, .passo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach((el) => observer.observe(el));


/*==========================
BOTÃO PRINCIPAL
==========================*/

const botao = document.querySelector(".btn-principal");

if (botao) {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-4px) scale(1.03)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "translateY(0) scale(1)";

    });

}
