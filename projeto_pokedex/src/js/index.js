const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const header = document.querySelector("header")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
        header.classList.remove("modo-escuro-header")

        imagemBotaoTrocaDeTema.setAttribute("src", "./projeto_pokedex/src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro")
        header.classList.add("modo-escuro-header")

        imagemBotaoTrocaDeTema.setAttribute("src", "./projeto_pokedex/src/imagens/moon.png")
    }
})