/* const canvasLogo = document.getElementById('canLogo');
const canvasRedes= document.getElementById('can_Network');

const lienzoCL= canvasLogo.getContext("2d");
const lienzoRd = canvasRedes.getContext("2d");

function dibujarLinea(color,Xinicial,Yinicial,Xfinal,Yfinal,lienzo){
    lienzo.beginPath(); //Comenzamos el dibujo
    lienzo.strokeStyle = color; //Decidimos el color de la linea
    lienzo.moveTo(Xinicial,Yinicial); // Posicionamos el punto
    lienzo.lineTo(Xfinal,Yfinal); // Creamos una linea diagonal
    lienzo.stroke(); //Trazamos la linea
    lienzo.closePath(); // Terminamos de dibujar
}
function dibujarCirculo(color,Xinicial,Yinicial,Xfinal,Yfinal,lienzo){

} */

//Mostrar el menu
const menuHamburger = document.getElementById("menuh");
const btnSugerir = document.getElementById("sug");
const menu =document.querySelector(".menu_mobile");
const main = document.querySelector(".myMain");

btnSugerir.addEventListener("click",nueva_Sugerencia);
menuHamburger.addEventListener("click",mostrarMenu);
function mostrarMenu(){
     menu.classList.toggle('inactive');
     main.classList.toggle('opacar');
    console.log("Boton Presionado");
}
function nueva_Sugerencia(){
   console.log("nuevaSugerencia");
}