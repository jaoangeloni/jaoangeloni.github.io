fetch("teste.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.nome)
    })