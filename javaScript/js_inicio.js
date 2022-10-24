const canvasLogo = document.getElementById('canLogo');
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

}
//Linea Decorativa del titulo
dibujarLinea('white',0,1,1,5,lienzoCL);
dibujarCirculo();
dibujarCirculo();

//Linea Decorativa Redes
//dibujarLinea();
dibujarCirculo;
dibujarCirculo();