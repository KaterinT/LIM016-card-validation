import validator from './validator.js';

// -------constantes para validar los inputs de entrada si son letras o numeros----
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	usuario: /^[a-zA-Z]{0,12}$/, // Letras, numeros
	numero_tarjeta: /^\d{0,16}$/ // 7 a 14 numeros.
}
// --------constantes para validar tarjeta--------- 
const validation_button = document.getElementById("validation_button");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const cerrar_con_btn_ok = document.getElementById("cerrar_con_btn_ok");
const cerrar_con_btn_ok2 = document.getElementById("cerrar_con_btn_ok2");

// let  cvv = document.getElementById("cvv");
// let  mm = document.getElementById("mm");
// let  nombre_usuario = document.getElementById("nombre_usuario");

// -------------VALIDANDO DATOS DE LOS INPUT A COMPLETAR----------------

const validarFrom = (e)=> {
  switch (e.target.name) {
    case "nombre_usuario":
      validar_datos_inputs(expresiones.usuario, e.target,"usuario");
    break;
    case "numero_tarjeta":
      validar_datos_inputs(expresiones.numero_tarjeta, e.target,"numero_tarjeta");
    break;

  }
    
}

const validar_datos_inputs = (expresion, input, campo) => {
  if (expresion.test(input.value)){
    document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_correcto");
    document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_incorrecto");
    document.querySelector(`#grupo__${campo}`).classList.remove("formulario_input-error-activo");
  } else {
    document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo_incorrecto");
    document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo_correcto");
    document.querySelector(`#grupo__${campo}`).classList.add("formulario_input-error-activo");
  }

}

inputs.forEach ((input) => {
  input.addEventListener("keyup",validarFrom);
  input.addEventListener("blur",validarFrom);
})

// ----------------------VALIDACION DE TARJETA AL DAR CLICK-------------------------
validation_button.addEventListener("click", e => {
  e.preventDefault

  // -----Validando tarjeta ----------
  let nombre_usuario = document.getElementById("nombre_usuario");
  let  creditCardNumber = document.getElementById("numero_tarjeta");
  let  resultado = validator.isValid(creditCardNumber.value);
  let ocultar_datos = validator.maskify(creditCardNumber.value);

// ------no permite espacios vacios-------
  if (creditCardNumber.value == "" || nombre_usuario.value == ""){
    alert("Ups!,algo salió mal. Completa el formulario para continuar");
  } else {

      if (resultado === true ){

        document.getElementById("validacion").innerHTML="Gracias por tu compra "+ nombre_usuario.value + "!";
        document.getElementById("description").innerHTML="Tu tarjeta N°: "+ ocultar_datos + " a sido validada con éxito!"
        overlay.classList.add("active");

      }else{

        document.getElementById("validacion2").innerHTML="Ups! " + nombre_usuario.value + " tu compra no pudo ser completada ";
        document.getElementById("description2").innerHTML="Tu tarjeta N°: "+ ocultar_datos + " es inválida. "
        document.getElementById("grupo_numero_tarjeta").classList.add("formulario_grupo_incorrecto");
        overlay2.classList.add("active");

      }
  }
})

cerrar_con_btn_ok.addEventListener("click", e => {
  e.preventDefault
   overlay.classList.remove("active");
  
})
cerrar_con_btn_ok2.addEventListener("click", e => {
  e.preventDefault
   overlay2.classList.remove("active");
   
})
// console.log(validator);