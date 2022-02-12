const btnIniciar = document.querySelector("#iniciar-juego");
const btnAdd = document.querySelector("#nueva-palabra");
const alerta = document.querySelector("#alertAdd");
const alertaNull = document.querySelector("#null");
const inputAhorcado = document.querySelector("#input-ahorcado");
const btnAhorcado = document.querySelector("#btn-ahorcado")
let palabras = ["PROGRAMADOR", "COACH", "JAVASCRIPT", "ALURA", "MEXICO", "MOLE", "CHALUPAS", "MOLOTES", "NOGADA", "HTML", "CSS", "REACT"];
let intentos = 0;
let palabraRandom;
let arrayChar;
let canvas = document.querySelector("#ahorcado");
let ctx = canvas.getContext("2d");
let xposition = 80;

btnIniciar.addEventListener("click",function(){
    limpiar();
    intentos = 0;
    xposition = 50;
    //selecciona un elemento del array aleatoriamente
    let rand = Math.floor(Math.random()*palabras.length);
    palabraRandom = palabras[rand];
    //console.log(palabraRandom)
    arrayChar = palabraRandom.split('');
    //console.log(palabraRandom);
    //crear espacios de la palabra 
    for(let i = 0; i < arrayChar.length; i++){
        createLetter(arrayChar[i])
        createLines();

    }

})


btnAhorcado.addEventListener("click", function(){
    //console.log(intentos)
    //hace un array con las letras de la palabra
    
    for(let i = 0; i < arrayChar.length; i++){


        console.log(arrayChar[i])
    }

    console.log(arrayChar)
    //let intento = palabras[random].length;
    switch(intentos){
        case 1:
            createBase();
            break;
        case 2:
            createAsta();
            break;
        case 3:
            createTope();
            break;
        case 4:
            createCabeza();
            break;
        case 5:
            createCuerpo();
            break;
        case 6:
            createLeftLeg();
            break;
        case 7:
            createRightLeg();
            break;
        case 8:
            createLeftArm();
            break;
        case 9:
            createRightArm();
            break;
        case 10:
            break;
    }

    intentos++;
})

btnAdd.addEventListener("click", function(){
    
    let input = document.querySelector("#input-nueva-palabra");
    let palabra = input.value;
    
    if(palabra === palabra.toUpperCase() && palabra){
        palabra = palabra.toUpperCase();
        input.value = "";
        removeAlerta(alerta);
        removeAlerta(alertaNull); 
        palabras.push(palabra);
        console.log(palabras)
    }else if(!palabra){
        addAlerta(alertaNull);
    }else{
         addAlerta(alerta);
    }
})

function addAlerta(elemento){
    elemento.classList.remove("invisible")
    elemento.classList.add("alerta")
}
function removeAlerta(elemento){
    elemento.classList.remove("alerta");
    elemento.classList.add("invisible");
}

function limpiar(){
    ctx.clearRect(0,10, canvas.width, canvas.height);
}
//letras
function createLetter(letra){
    ctx.font = "14px Arial";
    ctx.fillText(letra, xposition, 130);
}
//lineas
function createLines(){
    ctx.beginPath();
    ctx.moveTo(xposition,140);
    ctx.lineTo((xposition+10),140);
    ctx.lineWidth=1.8;
    ctx.stroke();
    xposition +=15;
}

//base
function createBase(){
    ctx.beginPath();
    ctx.moveTo(5,145);
    ctx.lineTo(15,130);
    ctx.lineTo(25,145);
    ctx.closePath();
    ctx.fill();
}
//asta
function createAsta(){
    ctx.beginPath();
    ctx.moveTo(15,131);
    ctx.lineTo(15,20);
    ctx.lineWidth=2;
    ctx.stroke();
}
//tope
function createTope(){
    ctx.beginPath();
    ctx.moveTo(14,20);
    ctx.lineTo(55,20);
    ctx.lineTo(55,30)
    ctx.lineWidth=2;
    ctx.stroke();
}
//cabeza
function createCabeza(){
    ctx.beginPath();
    ctx.lineWidth=1.5;
    let x = 55,
	    y = 40,
	    radio = 10,
	    anguloInicio = 0,
	    anguloFin = Math.PI * 2;
    ctx.arc(x, y, radio, anguloInicio, anguloFin);
    ctx.stroke();
}
//cuerpo
function createCuerpo(){
    ctx.beginPath();
    ctx.moveTo(55,50);
    ctx.lineTo(55,85);
    ctx.lineWidth=2;
    ctx.stroke();
}
//pierna izquierda
function createLeftLeg(){
    ctx.beginPath();
    ctx.moveTo(55,84);
    ctx.lineTo(40,100);
    ctx.lineWidth=1.8;
    ctx.stroke();
}
//pierna derecha
function createRightLeg(){
    ctx.beginPath();
    ctx.moveTo(55,84);
    ctx.lineTo(70,100);
    ctx.lineWidth=1.8;
    ctx.stroke();
}
//brazo izquierdo
function createLeftArm(){
    ctx.beginPath();
    ctx.moveTo(55,60);
    ctx.lineTo(75,60);
    ctx.lineWidth=1.8;
    ctx.stroke();
}
//brazo derecho
function createRightArm(){
    ctx.beginPath();
    ctx.moveTo(55,60);
    ctx.lineTo(35,60);
    ctx.lineWidth=1.8;
    ctx.stroke();
}