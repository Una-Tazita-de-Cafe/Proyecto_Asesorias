//Manipulacion del menu sugerencia
//const btnSugerir = document.querySelector("#sug");
const btnCancelSuge = document.querySelector(".canSuge");
const btnEnvSuge = document.querySelector(".envSuge");
const formSuger = document.querySelector(".formu_sugerencia");
const msjSuger = document.querySelector(".msj_sugeG");
const btnGuarSuge = document.querySelector(".btnAcepDug");

//btnSugerir.addEventListener("click",openSugerir);
//btnCancelSuge.addEventListener("click",closeSuge);
//tnEnvSuge.addEventListener("click",SendSuge);
//tnGuarSuge.addEventListener("click",msjGuardSuge);

function msjGuardSuge(){
    msjSuger.classList.toggle('inactive');
}


function openSugerir(){

formSuger.classList.toggle('inactive');

}

function closeSuge(){
formSuger.classList.toggle('inactive');
}

function SendSuge(){
    formSuger.classList.toggle('inactive');
    msjSuger.classList.toggle('inactive');
}

//Manipulacion del menu Inscripcion 
const verProg= document.querySelector('.vr_program');
const confirmAsesoria = document.querySelector('.msj_confirm_inscript');
const Inscripcion = document.querySelector("#inscribirme");
const btnInscri=document.querySelector('.btnInscrib');
const btnEstadis= document.querySelector('.btnEstadist');
const btnAceptInscrip = document.querySelector('.btnACF'); 
const btnCancelInscript = document.querySelector('.btnCCF');
const InscriptFin = document.querySelector('.msjInsF');
const btnAceptmsj = document.querySelector('.btnACCFF');




verProg.addEventListener("click",Open_menuInscribir);
btnEstadis.addEventListener("click",()=>{
    Inscripcion.classList.toggle('inactive');
});

btnInscri.addEventListener("click",()=>{
    Inscripcion.classList.toggle('inactive');
    confirmAsesoria.classList.toggle('inactive');
});
btnCancelInscript.addEventListener("click",()=>{
    confirmAsesoria.classList.toggle('inactive');
});
btnAceptInscrip.addEventListener("click",()=>{
    
    confirmAsesoria.classList.toggle('inactive');
    InscriptFin.classList.toggle('inactive');

});

btnAceptmsj.addEventListener("click",()=>{
    
InscriptFin.classList.toggle('inactive');
});

function Open_menuInscribir(){
    Inscripcion.classList.toggle('inactive');
}

