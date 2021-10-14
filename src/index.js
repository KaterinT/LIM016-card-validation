import validator from './validator.js';

const validation_button = document.getElementById("validation_button");
const overlay = document.getElementById("overlay");
const cerrar_con_btn_ok = document.getElementById("cerrar_con_btn_ok");
// let  cvv = document.getElementById("cvv");
// let  mm = document.getElementById("mm");
// let  nombre_usuario = document.getElementById("nombre_usuario");

validation_button.addEventListener("click", e => {
  e.preventDefault

  // ---Activar el popup---
  overlay.classList.add("active");

  //--- evaluar magnitud de palabra nombre_usuario--
  // if(nombre_usuario.value.length < 6){

  //   alert("Nombre muy pequeño");
  
  // }
  // -----Validando tarjeta ------

  let  creditCardNumber = document.getElementById("numero_tarjeta");
  let  resultado = validator.isValid(creditCardNumber.value);
  let ocultar_datos=validator.maskify(creditCardNumber.value);
  
  if (resultado === true){

    document.getElementById("validacion").innerHTML="Gracias validado! "+ocultar_datos;
  }else{

    document.getElementById("validacion").innerHTML="invalido! "+ocultar_datos;
  }

})

cerrar_con_btn_ok.addEventListener("click", e => {
  e.preventDefault
   overlay.classList.remove("active");
  
})
// console.log(validator);