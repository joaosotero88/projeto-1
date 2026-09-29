/* =====================================================
   PÁGINA INÍCIO
===================================================== */

export function mostrarInicio(app, criarGrafico) {

    app.innerHTML = `

        <section class="hero">

            <h2>Vamos mudar e transformar vidas</h2>

            <p>
                Vamos juntos dar uma nova chance para
                animaizinhos que precisam de amor,
                cuidado e proteção.
            </p>

            <img
                src="/public/imagens/cachorro.jpeg"
                alt="Cachorro esperando por um lar"
            >

            <br><br>

            <a href="#adocao" class="botao">
                Quero Adotar
            </a>

        </section>


        <section>

            <div class="container">

                <h2>Nosso trabalho</h2>

                <p style="text-align: center;">
                    A Anjinhos de 4 Patas é uma ONG sem fins
                    lucrativos que busca ajudar animais de rua,
                    oferecendo cuidado, proteção e uma nova
                    oportunidade de encontrar um lar.
                </p>


                <div class="cards">

                    <article class="card">

                        <img
                            src="/public/imagens/pastor.jpeg"
                            alt="Cachorro para adoção"
                        >

                        <div class="card-conteudo">

                            <h3>Resgate</h3>

                            <p>
                                Ajudamos animais que precisam
                                de cuidado e proteção.
                            </p>

                        </div>

                    </article>


                    <article class="card">

                        <img
                               src="/public/imagens/luna.jpeg"
                            alt="Luna"
                        >

                        <div class="card-conteudo">

                            <h3>Cuidados</h3>

                            <p>
                                Oferecemos carinho, alimentação
                                e cuidados enquanto aguardam
                                um novo lar.
                            </p>

                        </div>

                    </article>


                    <article class="card">

                        <img
                            src="/public/imagens/thor.jpeg"
                            alt="Thor"
                        >

                        <div class="card-conteudo">

                            <h3>Adoção</h3>

                            <p>
                                Procuramos famílias responsáveis
                                para nossos animais.
                            </p>

                        </div>

                    </article>

                </div>


                <div class="grafico-container">

                    <h2>
                        Nossos números
                    </h2>

                    <canvas id="graficoAnimais"></canvas>

                </div>

            </div>

        </section>
    `;

    if (typeof criarGrafico === "function") {
        criarGrafico();
    }
}


/* =====================================================
   PÁGINA SOBRE
===================================================== */

export function mostrarSobre(app) {

    app.innerHTML = `

        <section>

            <div class="sobre">

                <h2>Sobre nós</h2>

                <p>
                    A Anjinhos de 4 Patas é uma ONG sem fins
                    lucrativos criada com o objetivo de ajudar
                    animais que precisam de proteção e cuidado.
                </p>

                <p>
                    Nosso trabalho busca oferecer uma vida
                    melhor para os animais, proporcionando
                    alimentação, carinho, cuidados e,
                    principalmente, a oportunidade de encontrar
                    uma família.
                </p>

                <p>
                    Acreditamos que todos os animais merecem
                    respeito, amor e uma segunda chance.
                </p>


                <div class="alerta">

                    <strong>
                        Faça parte dessa causa!
                    </strong>

                    <p>
                        Você pode ajudar adotando, doando ou
                        sendo voluntário.
                    </p>

                </div>


            <a href="#adocao" class="botao">
    Como ajudar
</a>
            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA ANIMAIS
===================================================== */

export function mostrarAnimais(app) {

    app.innerHTML = `

        <section>

            <div class="container">

                <h2>Animais disponíveis</h2>

                <p style="text-align: center;">
                    Conheça alguns dos animais que estão
                    esperando por uma nova família.
                </p>


                <div class="cards">

                    <article class="card">

                        <img
                           src="/public/imagens/luna.jpeg"
                            alt="Luna disponível para adoção"
                        >

                        <div class="card-conteudo">

                            <h3>Luna</h3>

                            <span class="badge badge-sucesso">
                                Disponível
                            </span>

                            <p>
                                Luna é carinhosa e está esperando
                                uma família responsável.
                            </p>

                            <a
                                href="#adocao"
                                class="botao"
                            >
                                Adotar
                            </a>

                        </div>

                    </article>


                    <article class="card">

                        <img
                            src="/public/imagens/thor.jpeg"
                            alt="Thor disponível para adoção"
                        >

                        <div class="card-conteudo">

                            <h3>Thor</h3>

                            <span class="badge badge-sucesso">
                                Disponível
                            </span>

                            <p>
                                Thor é um cachorro cheio de
                                energia e procura um novo lar.
                            </p>

                            <a
                                href="#adocao"
                                class="botao"
                            >
                                Adotar
                            </a>

                        </div>

                    </article>


                    <article class="card">

                        <img
                          src="/public/imagens/pastor.jpeg"
                            alt="Cachorro disponível para adoção"
                        >

                        <div class="card-conteudo">

                            <h3>Pastor</h3>

                            <span class="badge badge-sucesso">
                                Disponível
                            </span>

                            <p>
                                Um companheiro que merece
                                uma família cheia de carinho.
                            </p>

                            <a
                                href="#adocao"
                                class="botao"
                            >
                                Adotar
                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA ADOÇÃO
===================================================== */

export function mostrarAdocao(app) {

    app.innerHTML = `

        <section>

            <div class="container">

                <h2>Adote um Anjinho</h2>

                <p style="text-align: center;">
                    A adoção é um ato de amor e responsabilidade.
                </p>


                <div class="cards">

                    <article class="card">

                        <img
                            src="/public/imagens/luna.jpeg"
                            alt="Luna"
                        >

                        <div class="card-conteudo">

                            <h3>Luna</h3>

                            <p>
                                Luna está esperando uma família
                                que possa oferecer muito carinho.
                            </p>

                            <a
                                href="#cadastro"
                                class="botao"
                            >
                                Quero adotar
                            </a>

                        </div>

                    </article>


                    <article class="card">

                        <img
                            src="/public/imagens/thor.jpeg"
                            alt="Thor"
                        >

                        <div class="card-conteudo">

                            <h3>Thor</h3>

                            <p>
                                Thor procura uma família
                                responsável e amorosa.
                            </p>

                            <a
                                href="#cadastro"
                                class="botao"
                            >
                                Quero adotar
                            </a>

                        </div>

                    </article>

                </div>


                <div class="alerta">

                    <strong>Importante:</strong>

                    <p>
                        A adoção deve ser feita de forma
                        responsável. Antes de adotar, tenha
                        certeza de que possui tempo, espaço
                        e condições para cuidar do animal.
                    </p>

                </div>

            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA DOAÇÃO
===================================================== */

export function mostrarDoe(app) {

    app.innerHTML = `

        <section>

            <div class="sobre">

                <h2>Faça uma doação</h2>

                <p>
                    Sua contribuição pode ajudar na alimentação,
                    nos cuidados e no bem-estar dos animais.
                </p>


                <div class="contato-item">

                    <h3>Como você pode ajudar?</h3>

                    <p>
                        Você pode contribuir com alimentos,
                        medicamentos, materiais ou ajuda
                        financeira.
                    </p>

                </div>


                <div class="alerta">

                    <strong>
                        Toda ajuda faz diferença!
                    </strong>

                    <p>
                        Entre em contato conosco para saber
                        como realizar sua contribuição.
                    </p>

                </div>


                <a
                    href="#contato"
                    class="botao"
                >
                    Entrar em contato
                </a>

            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA VOLUNTÁRIO
===================================================== */

export function mostrarVoluntario(app) {

    app.innerHTML = `

        <section>

            <div class="sobre">

                <h2>Seja voluntário</h2>

                <p>
                    Você pode fazer parte dessa causa
                    ajudando os animais que precisam.
                </p>


                <div class="cards">

                    <article class="card">

                        <div class="card-conteudo">

                            <h3>Cuidados</h3>

                            <p>
                                Ajude nos cuidados e na rotina
                                dos animais.
                            </p>

                        </div>

                    </article>


                    <article class="card">

                        <div class="card-conteudo">

                            <h3>Divulgação</h3>

                            <p>
                                Ajude a divulgar os animais
                                que estão procurando um lar.
                            </p>

                        </div>

                    </article>


                    <article class="card">

                        <div class="card-conteudo">

                            <h3>Eventos</h3>

                            <p>
                                Participe de ações e eventos
                                realizados pela ONG.
                            </p>

                        </div>

                    </article>

                </div>


                <a
                    href="#cadastro"
                    class="botao"
                >
                    Quero ser voluntário
                </a>

            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA CONTATO
===================================================== */

export function mostrarContato(app) {

    app.innerHTML = `

        <section>

            <div class="contato">

                <h2>Entre em contato</h2>

                <p>
                    Entre em contato conosco para saber mais
                    sobre adoção, doações e voluntariado.
                </p>


                <div class="contato-item">

                    <h3>E-mail</h3>

                    <p>
                        anjinhosde4patas@hotmail.com
                    </p>

                </div>


                <div class="contato-item">

                    <h3>Atendimento</h3>

                    <p>
                        Entre em contato para obter mais
                        informações sobre nossos animais
                        e ações.
                    </p>

                </div>


                <a
                    href="mailto:anjinhosde4patas@hotmail.com"
                    class="botao"
                >
                    Enviar e-mail
                </a>

            </div>

        </section>
    `;
}


/* =====================================================
   PÁGINA CADASTRO
===================================================== */

export function mostrarCadastro(app) {

    app.innerHTML = `

        <section>

            <div class="container">

                <h2>Cadastro</h2>

                <p style="text-align: center;">
                    Preencha seus dados para entrar em contato
                    conosco.
                </p>


                <form
                    id="formCadastro"
                    class="formulario"
                    novalidate
                >

                    <div class="grupo-formulario">

                        <label for="nome">
                            Nome
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            required
                        >

                        <small
                            id="erroNome"
                            class="mensagem-erro"
                        ></small>

                    </div>


                    <div class="grupo-formulario">

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            required
                        >

                        <small
                            id="erroEmail"
                            class="mensagem-erro"
                        ></small>

                    </div>


                    <div class="grupo-formulario">

                        <label for="telefone">
                            Telefone
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="Digite seu telefone"
                            required
                        >

                        <small
                            id="erroTelefone"
                            class="mensagem-erro"
                        ></small>

                    </div>


                    <button
                        type="submit"
                        class="botao"
                    >
                        Cadastrar
                    </button>

                </form>

            </div>

        </section>
    `;


    configurarCadastro();
}


/* =====================================================
   CADASTRO
===================================================== */

function configurarCadastro() {

    const form = document.getElementById("formCadastro");

    const nome = document.getElementById("nome");

    const email = document.getElementById("email");

    const telefone = document.getElementById("telefone");


    if (!form) return;


    /* ================================
       RECUPERAR LOCALSTORAGE
    ================================= */

    const cadastroSalvo = localStorage.getItem("cadastro");


    if (cadastroSalvo) {

        try {

            const cadastro = JSON.parse(cadastroSalvo);

            nome.value = cadastro.nome || "";

            email.value = cadastro.email || "";

            telefone.value = cadastro.telefone || "";

        } catch (erro) {

            console.log(
                "Erro ao recuperar cadastro:",
                erro
            );

        }

    }


    /* ================================
       VALIDAÇÃO
    ================================= */

    function validarNome() {

        const mensagem =
            document.getElementById("erroNome");

        if (nome.value.trim() === "") {

            nome.classList.add("campo-invalido");
            nome.classList.remove("campo-valido");

            mensagem.textContent =
                "Este campo é obrigatório.";

            return false;
        }

        nome.classList.remove("campo-invalido");
        nome.classList.add("campo-valido");

        mensagem.textContent = "";

        return true;
    }


    function validarEmail() {

        const mensagem =
            document.getElementById("erroEmail");

        if (
            email.value.trim() === "" ||
            !email.validity.valid
        ) {

            email.classList.add("campo-invalido");
            email.classList.remove("campo-valido");

            mensagem.textContent =
                "Digite um e-mail válido.";

            return false;
        }

        email.classList.remove("campo-invalido");
        email.classList.add("campo-valido");

        mensagem.textContent = "";

        return true;
    }


    function validarTelefone() {

        const mensagem =
            document.getElementById("erroTelefone");

        const numeros =
            telefone.value.replace(/\D/g, "");

        if (
            numeros.length !== 10 &&
            numeros.length !== 11
        ) {

            telefone.classList.add("campo-invalido");
            telefone.classList.remove("campo-valido");

            mensagem.textContent =
                "Digite um telefone válido.";

            return false;
        }

        telefone.classList.remove("campo-invalido");
        telefone.classList.add("campo-valido");

        mensagem.textContent = "";

        return true;
    }


    /* ================================
       EVENTOS INPUT
    ================================= */

    nome.addEventListener(
        "input",
        validarNome
    );

    email.addEventListener(
        "input",
        validarEmail
    );

    telefone.addEventListener(
        "input",
        validarTelefone
    );


    /* ================================
       SUBMIT
    ================================= */

    form.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const nomeValido =
                validarNome();

            const emailValido =
                validarEmail();

            const telefoneValido =
                validarTelefone();


            if (
                !nomeValido ||
                !emailValido ||
                !telefoneValido
            ) {

                return;
            }


            /* ================================
               SALVAR NO LOCALSTORAGE
            ================================= */

            const cadastro = {

                nome: nome.value.trim(),

                email: email.value.trim(),

                telefone: telefone.value.trim()

            };


            localStorage.setItem(
                "cadastro",
                JSON.stringify(cadastro)
            );


            alert(
                "Cadastro realizado com sucesso!"
            );

        }
    );

}