//ELEMENTOS PRINCIPALES
let $contentExersise = document.getElementById("contentExersise")
let $btnAdd = document.getElementById("btnAdd") // boton para desplegar alerta de ejercicios
let $alert = document.getElementById("alertExc") // la alerta que se despliega 
let $cardContain = document.getElementById("cardContain") // contiene la columna principal de agregar ejercicios
let $infoExs = document.querySelectorAll(".infoExs div") //contiene los ejericios que aparecen en la alerta
let $time = document.getElementById("time")
let $hms = document.getElementById("hms")
let $return = document.getElementById("return")
let $infoCard = document.getElementsByClassName("infoCard")
let audio = new Audio();
audio.src = "./assets/sound.mp3"

//ELEMENTOS DE ALERTA DE EJERCICIOS
let $btnEx1 = document.getElementById("btnEx1")
let $btnEx2 = document.getElementById("btnEx2")
let $btnEx3 = document.getElementById("btnEx3")
let $btnEx4 = document.getElementById("btnEx4")
let $routineOne = document.getElementById("rutinaUno")
let $routineTwo = document.getElementById("rutinaDos")
let $routineThree = document.getElementById("rutinaTres")
let $routineFour = document.getElementById("rutinaCuatro")

//ELEMENTOS PARA BARRAS DE PROGRESO
let $progressAbdomen = document.getElementById("progressAbdomen")
let $progressPectorals = document.getElementById("progressPectorales")
let $progressArms = document.getElementById("progressBrazos")
let $progressBackShoulders = document.getElementById("progressEspHom")
let $progressLegs = document.getElementById("progressPiernas")

$alert.style.display = "none"
$time.style.display = "none"




//FUNCIONES
window.addEventListener("load", mouseCard)

$btnAdd.addEventListener("click", () => {
    $alert.style.display = "block"
    $alert.classList.add('animate__animated', 'animate__bounceIn')
    addRoutine($btnEx1, $routineOne)
    addRoutine($btnEx2, $routineTwo)
    addRoutine($btnEx3, $routineThree)
    addRoutine($btnEx4, $routineFour)

})


function addRoutine(btn, element) {
    btn.addEventListener("click", () => {
        $cardContain.appendChild(element)
        $alert.style.display = "none"
        $btnEx1.style.display = "none"
        $btnEx2.style.display = "none"
        $btnEx3.style.display = "none"
        $btnAdd.style.display = "none"

        if (btn === $btnEx1) {
            $contentExersise.innerHTML = `
                                  <h1>Ejercicios A</h1>
                                  <h5>Abdominales</h5>
                                  <img class="" src="https://i.ibb.co/2F2xVsP/04.gif" width="200px" style="display:block; margin:auto;">
                                  <button class="btn btn-success w-25 p-3 animate__animated animate__pulse animate__infinite" id="btnStart">Empezar</button>
                                  <a class="btn btn-danger" href="./excersises.html" style="display:block; width:50%; margin:auto; margin-top:10px;">Volver a seleccionar un ejercicio</a>`

            startEx("Peso muerto", "Rutina A", "https://i.ibb.co/j5kZFrv/ac0a1ce36f9c68c70d26017898b77258.gif")
            $progressBackShoulders.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressAbdomen.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressAbdomen.style.width = random(0,100) + "%"
            $progressBackShoulders.style.width = random(0,100) + "%"
        }
        if (btn === $btnEx2) {
            $contentExersise.innerHTML = `
                                  <h1>Ejercicios B</h1>
                                  <h5>Movimientos laterales</h5>
                                  <img src="https://i.ibb.co/YXTcnzJ/step-by-step-exercises-zancadas-lateral.gif" width="200px" style="display:block; margin:auto;">
                                  <button class="btn btn-success w-25 p-3 animate__animated animate__pulse animate__infinite" id="btnStart">Empezar</button>
                                  <a class="btn btn-danger" href="./excersises.html" style="display:block; width:50%; margin:auto; margin-top:10px;">Volver a seleccionar un ejercicio</a>`

            startEx("Press de banca con barra", "Rutina B", "https://i.ibb.co/FKvYswX/bench-press-1568117208.gif")
            $progressPectorals.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressPectorals.style.width = random(0,100) + "%"
        }
        if (btn === $btnEx3) {
            $contentExersise.innerHTML = `
                                  <h1>Ejercicios C</h1>
                                  <h5>Zancada<h5>
                                  <img src="https://i.ibb.co/Wtj1gPz/step-by-step-exercises-zancadas.gif" width="200px" style="display:block; margin:auto;">
                                  <button class="btn btn-success w-25 p-3 animate__animated animate__pulse animate__infinite" id="btnStart">Empezar</button>
                                  <a class="btn btn-danger" href="./excersises.html" style="display:block; width:50%; margin:auto; margin-top:10px;">Volver a seleccionar un ejercicio</a>`

            startEx("Remo invertido", "Rutina C", "https://i.ibb.co/hBZzh90/invertedrow-1457101739.gif")
            $progressLegs.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressBackShoulders.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressLegs.style.width = random(0,100) + "%"
            $progressBackShoulders.style.width = random(0,100) + "%"
        }
        if (btn === $btnEx4) {
            $contentExersise.innerHTML = `
                                  <h1>Ejercicios D</h1>
                                  <h5>Biceps<h5>
                                  <img src="https://i.ibb.co/hK2r9x9/0d9a65fbafa25cc6d833009e44ad48fb.gif" width="300px" style="display:block; margin:auto;">
                                  <button class="btn btn-success w-25 p-3 animate__animated animate__pulse animate__infinite" id="btnStart">Empezar</button>
                                  <a class="btn btn-danger" href="./excersises.html" style="display:block; width:50%; margin:auto; margin-top:10px;">Volver a seleccionar un ejercicio</a>`

            startEx("Triceps", "Rutina D", "https://i.ibb.co/9yjLkbW/triceps-mancuernas-1552913823.gif")
            $progressArms.classList.add("animate__animated", "animate__slideInLeft", "animate__delay-1s","animate__repeat-1")
            $progressArms.style.width = random(0,100) + "%"
        }

    })
}

function startEx(name, type, picture) {
    //CREACION DE UN BOTON DE START UNA VEZ AGREGADA LA RUTINA
    let $btnStart = document.getElementById("btnStart")
    document.querySelector(".start");
    document.getElementById("hms").innerHTML = "00:00:00";

    // UN EVENTO CLICK, QUE AL EJECUTARSE AGREGA UN TEMPORIZADOR Y UN BOTON DE SIGUIENTE
    $btnStart.addEventListener("click", () => {
        audio.play()
        clockExcersise($time)
        $btnStart.style.display = "none"
        btnNext = document.createElement("button")
        btnNext.classList.add("btn", "btn-warning", "w-25", "p-3")
        btnNext.textContent = "Siguiente"
        $contentExersise.appendChild(btnNext)

        btnNext.addEventListener("click", () => {
            if (btnNext) {
                newExcersise(name, type, picture)
            }
        })
    })


}

function newExcersise(name, type, picture) {
    const excersise = {
        name: name,
        type: type,
        picture: picture
    }
    $contentExersise.innerHTML = `
                                  <h1>${type}</h1>
                                  <h5>${name}</h5>
                                  <img class="" src="${picture}" width="300px" style="display:block; margin:auto;">
                                  <a class="btn btn-danger" href="./excersises.html" style="display:block; width:50%; margin:auto; margin-top:10px;">Finalizar ejercicios</a>`
    const resetClock = () => {
        $contentExersise.appendChild($time)
        $time.style.display = "block"
        h = 0;
        m = 0;
        s = 0;

        id = setInterval(() => {
            var hAux, mAux, sAux;

            if (s > 59) { m++; s = 0; }
            if (m > 59) { h++; m = 0; }
            if (h > 24) { h = 0; }

            if (s < 10) { sAux = "0" + s; } else { sAux = s; }
            if (m < 10) { mAux = "0" + m; } else { mAux = m; }
            if (h < 10) { hAux = "0" + h; } else { hAux = h; }
            time.innerHTML = hAux + ":" + mAux + ":" + sAux;
        }, 1000);
    }
    resetClock()
}


function clockExcersise(time) {
    $contentExersise.appendChild($time)
    $time.style.display = "block"
    h = 0;
    m = 0;
    s = 0;

    id = setInterval(() => {
        var hAux, mAux, sAux;
        s++;
        if (s > 59) { m++; s = 0; }
        if (m > 59) { h++; m = 0; }
        if (h > 24) { h = 0; }

        if (s < 10) { sAux = "0" + s; } else { sAux = s; }
        if (m < 10) { mAux = "0" + m; } else { mAux = m; }
        if (h < 10) { hAux = "0" + h; } else { hAux = h; }
        time.innerHTML = hAux + ":" + mAux + ":" + sAux;
    }, 1000);
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function mouseCard() {
    for (let i = 0; i < $infoCard.length; i++) {
        const element = $infoCard[i];
        console.log(element.children)
        element.addEventListener("mouseover", (e)=> {
            let childrenImg = element.children[0]
            childrenImg.style.filter = 'blur(5px)'
            let childrenElement = element.children[1]
                childrenElement.style.display = "block"
        })
        element.addEventListener("mouseout", ()=> {
            let childrenImg = element.children[0]
            childrenImg.style.filter = 'blur(0px)'
            let childrenElement = element.children[1]
                childrenElement.style.display = "none"
        })
    }
}