function encriptador(){
    var texto  = document.getElementById("dato").value.toLowerCase(); //obtenemos del elemento inputTexto el texto a encriptar y usamos El toLowerCase()método devuelve el valor de la cadena de llamada convertido a minúsculas.
   var cifrando = texto.replace(/e/img,"enter");
   // i es para que afecte tanto mayusculas como minusculas 
   //g es para toda la linea u oracion 
   // m espara que afecte a todas las lineas

   var cifrando = cifrando.replace(/o/img,"ober");
   var cifrando = cifrando.replace(/i/img,"imes"); 
   var cifrando = cifrando.replace(/a/img,"ai");
   var cifrando = cifrando.replace(/u/img,"ufat");

   document.getElementById("muneco").style.display ="none";
   document.getElementById("text-img1").style.display ="none";
   document.getElementById("text-img2").innerHTML =cifrando;
   document.getElementById("copy").style.display = "show";
   document.getElementById("copy").style.display = "inherit";





}


function desencriptador(){
    var texto  = document.getElementById("dato").value.toLowerCase(); //obtenemos del elemento inputTexto el texto a encriptar y usamos El toLowerCase()método devuelve el valor de la cadena de llamada convertido a minúsculas.
   var cifrando = texto.replace(/enter/img,"e");
   // i es para que afecte tanto mayusculas como minusculas 
   //g es para toda la linea u oracion 
   // m espara que afecte a todas las lineas

   var cifrando = cifrando.replace(/ober/img,"o");
   var cifrando = cifrando.replace(/imes/img,"i"); 
   var cifrando = cifrando.replace(/ai/img,"a");
   var cifrando = cifrando.replace(/ufat/img,"u");

   document.getElementById("muneco").style.display ="none";
   document.getElementById("text-img1").style.display ="none";
   document.getElementById("text-img2").innerHTML =cifrando;
   document.getElementById("copy").style.display = "show";
   document.getElementById("copy").style.display = "inherit";

}

function guardarinfo(){
    var contenido = document.querySelector("#text-img2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio");
}