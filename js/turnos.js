const turnos = document.getElementById("turnos")
const fecha = new Date()

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let mesesIng=["January", "February", "March", "May", "June", "July", "August", "September","Octuber", "November","December"]
let dias =["domingo","lunes", "martes", "miercoles","jueves","viernes","sabado"]
let diasProximos = dias.map(dia => dia+"Prox")


let mesActual = meses[fecha.getMonth()]
let mesActualIng=mesesIng[fecha.getMonth()]
let mesProximo = meses[fecha.getMonth()+1]
let mesProximoIng = mesesIng[fecha.getMonth()+1]
let anio = fecha.getFullYear()

function mes1(){
    
    const mes1 = document.createElement("div")
    mes1.classList.add("calendar")
    mes1.innerHTML+=`
                    <h2 class="mes">${mesActual}</h2>            
                    <ul class="dias">
                        <li class="dia nombre finde" id="domingo">Do</li>
                        <li class="dia nombre laboral" id="lunes">Lu</li>
                        <li class="dia nombre noLaboral" id="martes">Ma</li>
                        <li class="dia nombre laboral" id="miercoles">Mi</li>
                        <li class="dia nombre noLaboral" id="jueves">Ju</li>
                        <li class="dia nombre laboral" id="viernes">Vi</li>
                        <li class="dia nombre noLaboral" id="sabado">Sa</li>
                    </ul>
                    `
    turnos.appendChild(mes1)
}
mes1()

function mes2(){
    
    const mes2 = document.createElement("div")
    mes2.classList.add("calendar")
    mes2.innerHTML+=`
                    <h2 class="mes">${mesProximo}</h2>            
                    <ul class="dias">
                        <li class="dia nombre finde" id="domingoProx">Do</li>
                        <li class="dia nombre laboral" id="lunesProx">Lu</li>
                        <li class="dia nombre noLaboral" id="martesProx">Ma</li>
                        <li class="dia nombre laboral" id="miercolesProx">Mi</li>
                        <li class="dia nombre noLaboral" id="juevesProx">Ju</li>
                        <li class="dia nombre laboral" id="viernesProx">Vi</li>
                        <li class="dia nombre noLaboral" id="sabadoProx">Sa</li>
                    </ul>
                    `
    turnos.appendChild(mes2)
}
mes2()


let cantidadDias
let cantidadDiasProx


for(let i = 1; i<=31;i++){
    diasVacios(i)
    buscarDias(i)
    buscarDiasProximoMes(i)
    diasVaciosProximos(i)
    diasPasados(i)
}

function buscarDias(dia){
    let numeroDia = new Date(mesActual.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    let definirDia = dias[buscarDia]
    let printDia = document.getElementById(definirDia)
    printDia.innerHTML+=`
        <p onclick="dia(${dia})" class="dia" id="dia${dia}">${dia}</p>
        `  
    let today = document.getElementById(`dia${dia}`)
    if(fecha.getUTCDate()==dia){
        today.classList.add("today")
    }
    
}

function diasVacios(dia){
    let numeroDia = new Date(mesActual.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    if(dia===1){
        if(buscarDia+1>dia){
            for(let i = 0;i<buscarDia;i++){
                let diaVacio = dias[i]
                let printEmpty = document.getElementById(diaVacio)
                printEmpty.innerHTML+=`
                                        <p class="dia empty">""</p>
                                        `
            }
        }
    }
}

function buscarDiasProximoMes(dia){
    let numeroDia = new Date(mesProximoIng.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    let definirDia = diasProximos[buscarDia]
    let printDiaProx = document.getElementById(definirDia)
    printDiaProx.innerHTML+=`
        <p onclick="diaProximo(${dia})" class="dia">${dia}</p>
        `   
}

function diasVaciosProximos(dia){
    let numeroDia = new Date(mesProximoIng.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    if(dia===1){
        if(buscarDia+1>dia){
            for(let i = 0;i<buscarDia;i++){
                let diaVacio = diasProximos[i]
                let printEmptyProx = document.getElementById(diaVacio)
                printEmptyProx.innerHTML+=`
                                        <p class="dia empty">""</p>
                                        `
            }
        }
    }
}

function diasPasados(dia){
    if(fecha.getUTCDate()>dia){
        let past = document.getElementById(`dia${dia}`)
        past.classList.add("noLaboral")
        past.classList.remove("laboral")
    }
}

function turno(){  
    const diaTurno = document.createElement("div")
    diaTurno.classList.add("diaTurno")
    diaTurno.innerHTML=`<p id="diaTurno">
                        </p>
                        `
    turnos.appendChild(diaTurno)
}

turno()

function dia(dia){
    let turno = document.getElementById("diaTurno")
    let numeroDia = new Date(mesActualIng.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    let definirDia = dias[buscarDia]
    if(fecha.getUTCDate()<dia){
        switch(definirDia){
            case "domingo":
            case "martes":
            case "jueves":
            case "sabado":
                turno.textContent="Dia no disponible"
                break;
            case "lunes":
            case "miercoles":
            case "viernes":
                turno.textContent=` 
                            ${definirDia.charAt(0).toUpperCase() + definirDia.slice(1)} ${dia} de ${mesActual}`
                            break;
        }
    }else{
        turno.textContent=`No puedes elegir una fecha anterior al dia actual`
    }
    

}

function diaProximo(dia){
    let turno = document.getElementById("diaTurno")
    let numeroDia = new Date(mesProximoIng.toString() + dia.toString()+","+ anio.toString() )
    let buscarDia = numeroDia.getDay()
    let definirDia = dias[buscarDia]
    switch(definirDia){
        case "domingo":
        case "martes":
        case "jueves":
        case "sabado":
            turno.textContent="Dia no disponible"
            break;
        case "lunes":
        case "miercoles":
        case "viernes":
            turno.textContent=` 
                        ${definirDia.charAt(0).toUpperCase() + definirDia.slice(1)} ${dia} de ${mesProximo}`
                        break;
    }

}
