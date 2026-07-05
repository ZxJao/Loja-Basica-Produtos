const produtos = [
    { nome: "Smartphone Gamer", categoria: "eletronicos", preco: "R$ 2.500" },
    { nome: "Notebook Pro", categoria: "eletronicos", preco: "R$ 4.200" },
    { nome: "Fone de Ouvido Bluetooth", categoria: "eletronicos", preco: "R$ 300" },
    { nome: "Camiseta Algodão", categoria: "roupas", preco: "R$ 80" },
    { nome: "Jaqueta de Couro", categoria: "roupas", preco: "R$ 350" },
    { nome: "Tênis Esportivo", categoria: "roupas", preco: "R$ 250" }
];


const pesquisa = document.getElementById(`pesquisa`)
const listaP = document.getElementById(`listaProdutos`)
const botoes = document.querySelectorAll(`.btn-filtro`)

function exibirProdutos(lista) {
    listaP.innerHTML = ``

    lista.forEach(item => {
        listaP.innerHTML += `
        <div class="card-produto">
        <h3>${item.nome}</h3>
        <p>${item.preco}</p>
        </div>
        `
    })
}

botoes.forEach(botao => {
    botao.addEventListener(`click`, () => {
        const categoriaSelecionada = botao.getAttribute(`data-categoria`)

        if(categoriaSelecionada === `todos`) {
            exibirProdutos(produtos)
        } else {
            const listaFiltrada = produtos.filter(prod => prod.categoria === categoriaSelecionada)

            exibirProdutos(listaFiltrada)
        }
    })
})

pesquisa.addEventListener(`input`, () => {
    const termoDigitado = pesquisa.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    const listafiltrada = produtos.filter(prod => {
        const nomeSemAcento = prod.nome.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

        return nomeSemAcento.includes(termoDigitado)
    })
    exibirProdutos(listafiltrada)
})

exibirProdutos(produtos)