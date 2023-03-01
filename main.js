const numero0 = document.getElementById("numero_0");
const numero1 = document.getElementById("numero_1");
const numero2 = document.getElementById("numero_2");
const numero3 = document.getElementById("numero_3");
const numero4 = document.getElementById("numero_4");
const numero5 = document.getElementById("numero_5");
const numero6 = document.getElementById("numero_6");
const numero7 = document.getElementById("numero_7");
const numero8 = document.getElementById("numero_8");
const numero9 = document.getElementById("numero_9");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const dividir = document.getElementById("dividir");
const mutiplicacion = document.getElementById("Multiplicacion");
const borrar = document.getElementById("borrar");
const restultado = document.getElementById("restultado");


let operador = 0;
let result = 0; 
let ingresar = 0;

suma.addEventListener('click', suma_c);
function suma_c(){
    signo.innerHTML= "+";
    operador = "+"
}

resta.addEventListener('click', resta_c);
function resta_c(){
    signo.innerHTML= "-";
    operador = "-"
}
dividir.addEventListener('click', dividir_c);
function dividir_c(){
    signo.innerHTML= "/";
    operador = "/"
}
Multiplicacion.addEventListener('click', multiplicacion_c);
function multiplicacion_c(){
    signo.innerHTML= "*";
    operador = "*"
}

borrar.addEventListener('click',borrar);
function borrar(){
    mostrar.innerHTML=""
}

numero_0.addEventListener('click', numero0);
function numero0(){
    numero2.innerHTML="";
    ingresar=0;
    numero2.innerHTML="0";
}

numero_1.addEventListener('click', numero1);
function numero1(){
    numero2.innerHTML="";
    ingresar=1;
    numero2.innerHTML="1";
}

numero_2.addEventListener('click', numero2);
function numero2(){
    numero2.innerHTML="";
    ingresar=2;
    numero2.innerHTML="2";
}

numero_3.addEventListener('click', numero3);
function numero3(){
    numero2.innerHTML="";
    ingresar=3;
    numero2.innerHTML="3";
}

numero_4.addEventListener('click', numero4);
function numero4(){
    numero2.innerHTML="";
    ingresar=4;
    numero2.innerHTML="4";
}

numero_5.addEventListener('click', numero5);
function numero5(){
    numero2.innerHTML="";
    ingresar=5;
    numero2.innerHTML="5";
}

numero_6.addEventListener('click', numero6);
function numero6(){
    numero2.innerHTML="";
    ingresar=6;
    numero2.innerHTML="6";
}

numero_7.addEventListener('click', numero7);
function numero0(){
    numero2.innerHTML="";
    ingresar=7;
    numero2.innerHTML="7";
}

numero_8.addEventListener('click', numero8);
function numero8(){
    numero2.innerHTML="";
    ingresar=8;
    numero2.innerHTML="8";
}

numero_9.addEventListener('click', numero9);
function numero9(){
    numero2.innerHTML="";
    ingresar=9;
    numero2.innerHTML="9";
}

operacion.addEventListener('click',restultado);
function restultado(){
    if(operador==="+"){
        result=parseInt(numero1.value)+parseInt(ingresar)
    }else if(operador==="-"){
        result = numero1.value-ingresar;
    }
    else if(operador === "/"){
        result = numero1.value/ingresar;
    }
    else{
        result = numero1.value*ingresar
    }
}


