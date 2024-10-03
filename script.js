const arrayPostagens = [
    {
        titulo: "Pop Vegan",
        subtitulo: "Comida veganda para todos!",
        data: "06/07/2022",
        texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegando. Vale muita a pena conhecer :)"
    },
    {
        titulo: "Make Hommus. Not War",
        subtitulo: "Só delivery, para curtir em casa !",
        data: "18/08/2022",
        texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafa bonina."
    },
    {

    titulo: "Churrascada do Mar",
        subtitulo: "Melhor do que estar na praia!",
        data: "30/08/2022",
        texto: "Todos conhecemos e amamos um bom churrasco, mas o que voc~e acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
    },
]






for(let i = 0; i < arrayPostagens.length; i++) {
    // Criar um elemento

    let article = document.createElement("article")


    // Manipular o elelmento

    article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
    `

    article.id = `post-${i+1}`

    // Adicionar elementos

    let main = document.querySelector("main")
    main.appendChild(article)
}
