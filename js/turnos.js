const turnos = document.getElementById("turnos");
const fecha = new Date();

let meses = [
    {
        mes: "Enero",
        dias: 31,
    },
    {
        mes: "Febrero",
        dias: 28,
    },
    {
        mes: "Marzo",
        dias: 31,
    },
    {
        mes: "Abril",
        dias: 30,
    },
    {
        mes: "Mayo",
        dias: 31,
    },
    {
        mes: "Junio",
        dias: 30,
    },
    {
        mes: "Julio",
        dias: 31,
    },
    {
        mes: "Agosto",
        dias: 31,
    },
    {
        mes: "Septiembre",
        dias: 30,
    },
    {
        mes: "Octubre",
        dias: 31,
    },
    {
        mes: "Noviembre",
        dias: 30,
    },
    {
        mes: "Diciembre",
        dias: 31,
    },
];

let mesesIng = [
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
];
let dias = [
    {
        dia: "domingo",
        estado: "no laborable",
    },
    {
        dia: "lunes",
        estado: "laborable",
    },
    {
        dia: "martes",
        estado: "no laborable",
    },
    {
        dia: "miercoles",
        estado: "laborable",
    },
    {
        dia: "jueves",
        estado: "no laborable",
    },
    {
        dia: "viernes",
        estado: "laborable",
    },
    {
        dia: "sabado",
        estado: "no laborable",
    },
];
let diasProximos = dias.map((dia) => dia + "Prox");

let mesActual = meses[fecha.getMonth()];
let mesActualIng = mesesIng[fecha.getMonth()];
let mesProximo = meses[fecha.getMonth() + 1];
let mesProximoIng = mesesIng[fecha.getMonth() + 1];
let anio = fecha.getFullYear();

function mes1() {
    const mes1 = document.createElement("div");
    mes1.classList.add("calendar");
    mes1.innerHTML += `
                    <h2 class="mes">${mesActual.mes}</h2>            
                    <ul class="dias">
                        <li class="dia nombre finde" id="domingo">Do</li>
                        <li class="dia nombre laboral" id="lunes">Lu</li>
                        <li class="dia nombre noLaboral" id="martes">Ma</li>
                        <li class="dia nombre laboral" id="miercoles">Mi</li>
                        <li class="dia nombre noLaboral" id="jueves">Ju</li>
                        <li class="dia nombre laboral" id="viernes">Vi</li>
                        <li class="dia nombre noLaboral" id="sabado">Sa</li>
                    </ul>
                    `;
    turnos.appendChild(mes1);
}
mes1();

function mes2() {
    const mes2 = document.createElement("div");
    mes2.classList.add("calendar");
    mes2.innerHTML += `
                    <h2 class="mes">${mesProximo.mes}</h2>            
                    <ul class="dias">
                        <li class="dia nombre finde" id="domingoProx">Do</li>
                        <li class="dia nombre laboral" id="lunesProx">Lu</li>
                        <li class="dia nombre noLaboral" id="martesProx">Ma</li>
                        <li class="dia nombre laboral" id="miercolesProx">Mi</li>
                        <li class="dia nombre noLaboral" id="juevesProx">Ju</li>
                        <li class="dia nombre laboral" id="viernesProx">Vi</li>
                        <li class="dia nombre noLaboral" id="sabadoProx">Sa</li>
                    </ul>
                    `;
    turnos.appendChild(mes2);
}
mes2();

for (let i = 1; i <= mesActual.dias; i++) {
    diasVacios(i);
    buscarDias(i);
    diasPasados(i);
}

for (let i = 1; i <= mesProximo.dias; i++) {
    buscarDiasProximoMes(i);
    diasVaciosProximos(i);
}

function buscarDias(numero) {
    let numeroDia = new Date(mesActual.mes + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    let definirDia = dias[buscarDia].dia;
    let printDia = document.getElementById(definirDia);
    printDia.innerHTML += `
        <p onclick="dia(${numero})" class="dia" id="dia${numero}">${numero}</p>
        `;
    let today = document.getElementById(`dia${numero}`);
    if (fecha.getUTCDate() == numero) {
        today.classList.add("today");
    }
}

function diasVacios(numero) {
    let numeroDia = new Date(mesActual.mes + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    if (numero === 1) {
        if (buscarDia + 1 > numero) {
            for (let i = 0; i < buscarDia; i++) {
                let diaVacio = dias[i].dia;
                let printEmpty = document.getElementById(diaVacio);
                printEmpty.innerHTML += `
                                        <p class="dia empty">""</p>
                                        `;
            }
        }
    }
}

function buscarDiasProximoMes(numero) {
    let numeroDia = new Date(mesProximoIng + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    let definirDia = dias[buscarDia].dia;
    let printDiaProx = document.getElementById(definirDia + "Prox");
    printDiaProx.innerHTML += `
        <p onclick="diaProximo(${numero})" class="dia">${numero}</p>
        `;
}

function diasVaciosProximos(numero) {
    let numeroDia = new Date(mesProximoIng + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    if (numero === 1) {
        if (buscarDia + 1 > numero) {
            for (let i = 0; i < buscarDia; i++) {
                let diaVacio = dias[i].dia;
                let printEmptyProx = document.getElementById(diaVacio + "Prox");
                printEmptyProx.innerHTML += `
                                        <p class="dia empty">""</p>
                                        `;
            }
        }
    }
}

function diasPasados(numero) {
    if (fecha.getUTCDate() > numero) {
        let past = document.getElementById(`dia${numero}`);
        past.classList.add("noLaboral");
        past.classList.remove("laboral");
    }
}

function turno() {
    const diaTurno = document.createElement("div");
    diaTurno.classList.add("diaTurno");
    diaTurno.innerHTML = `<p id="diaTurno">
                        </p>
                        `;
    turnos.appendChild(diaTurno);
}

turno();

const turnoText = document.getElementById("diaTurno");

function dia(numero) {
    let numeroDia = new Date(mesActualIng + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    let definirDia = dias[buscarDia];
    if (fecha.getUTCDate() < numero) {
        if (definirDia.estado === "laborable") {
            turnoText.textContent = `${
                definirDia.dia.charAt(0).toUpperCase() + definirDia.dia.slice(1)
            } ${numero} de ${mesActual.mes}`;
            createButton();
        } else {
            turnoText.textContent = "Día no disponible";
            deleteButton();
        }
    } else {
        deleteButton();
        turnoText.textContent = `Tienes que elegir una fecha a futuro`;
    }
}

function diaProximo(numero) {
    let numeroDia = new Date(mesProximoIng + numero + "," + anio);
    let buscarDia = numeroDia.getDay();
    let definirDia = dias[buscarDia];
    if (definirDia.estado === "laborable") {
        turnoText.textContent = `${
            definirDia.dia.charAt(0).toUpperCase() + definirDia.dia.slice(1)
        } ${numero} de ${mesProximo.mes}`;
        createButton();
    } else {
        turnoText.textContent = "Día no disponible";
        deleteButton();
    }
}
const btn = document.createElement("div");

function createButton() {
    btn.innerHTML = "";
    btn.classList.add("boton");
    btn.innerHTML = `<a class="btnText" target="_blank" href="https://api.whatsapp.com/send?phone=+5492915663998&text=Hola, necesito un turno para el día ${turnoText.textContent}.">
                    Solicitar Turno
                    </a>
                        `;
    turnos.appendChild(btn);
}

function deleteButton() {
    btn.innerHTML = "";
    btn.classList.remove("boton");
}
