import {
    mostrarInicio,
    mostrarSobre,
    mostrarAnimais,
    mostrarAdocao,
    mostrarDoe,
    mostrarVoluntario,
    mostrarContato,
    mostrarCadastro
} from "./paginas.js";


const app = document.getElementById("app");

const menu = document.getElementById("menu");

const menuToggle = document.getElementById("menuToggle");

const toast = document.getElementById("toast");


/* ================================
   MENU MOBILE
================================ */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("menu-aberto");

        const aberto = menu.classList.contains("menu-aberto");

        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });

}


/* ================================
   TOAST
================================ */

export function mostrarToast(mensagem) {

    if (!toast) return;

    toast.textContent = mensagem;

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 3000);
}


/* ================================
   FECHAR MENU
   AO CLICAR EM UM LINK
================================ */

document.addEventListener("click", (evento) => {

    const link = evento.target.closest("a");

    if (!link) return;

    if (link.getAttribute("href")?.startsWith("#")) {

        menu?.classList.remove("menu-aberto");

        menuToggle?.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    }

});


/* ================================
   GRÁFICO
================================ */

export function criarGrafico() {

    const canvas = document.getElementById("graficoAnimais");

    if (!canvas) return;

    if (typeof Chart === "undefined") {

        console.log("Chart.js não foi carregado.");

        return;
    }

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "Disponíveis",
                "Adotados",
                "Voluntários"
            ],

            datasets: [
                {
                    label: "Quantidade",

                    data: [
                        8,
                        15,
                        10
                    ],

                    borderWidth: 1
                }
            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}


/* ================================
   ROTAS
================================ */

function carregarPagina() {

    const rota = window.location.hash.replace("#", "");

    switch (rota) {

        case "sobre":
            mostrarSobre(app);
            break;

        case "animais":
            mostrarAnimais(app);
            break;

        case "adocao":
            mostrarAdocao(app);
            break;

        case "doe":
            mostrarDoe(app);
            break;

        case "voluntario":
            mostrarVoluntario(app);
            break;

        case "contato":
            mostrarContato(app);
            break;

        case "cadastro":
            mostrarCadastro(app);
            break;

        case "":
        case "inicio":
        default:
            mostrarInicio(app, criarGrafico);
            break;
    }

}


/* ================================
   QUANDO A URL MUDA
================================ */

window.addEventListener(
    "hashchange",
    carregarPagina
);


/* ================================
   CARREGAMENTO INICIAL
================================ */

carregarPagina();