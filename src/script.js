document
    .querySelector("button.fat") //Fazer uma pesquisa de um seletor
    .addEventListener("click", function () {
        document
            .querySelector("#footer") //Buscar o footer
            .classList //Propriedade que recebe toggle
            .toggle("hide") // Add classe hide

    }) //Ouvindo o evento click e chamando a função para sumir e aparecer o Footer