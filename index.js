const contenedorCards = document.getElementById("contenedorCards")
const listaDeEstilos= "json/estilos.json"

fetch(listaDeEstilos)
    .then((results)=>results.json())
    .then((estilos)=>{
        estilos.forEach((estilo)=>{
            contenedorCards.innerHTML+=`
                                        <div class="cards">
                                            <img class="estilo" src="${estilo.img}">
                                            <div class="contenedorDescripcion">
                                                <h4 class="nombreEstilo">${estilo.estilo}</h4>
                                                <p class
                                            </div>
                                        </div>
                                        `
        })
    })
    .catch((error)=>console.error(error))