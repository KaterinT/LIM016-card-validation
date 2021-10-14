const validator = {
  // ...

  isValid: (creditCardNumber) => {

    let suma=0;
     //Array del numero de la tarjeta en orden invertido
    let arrayNumTarjeta= creditCardNumber.toString().split("").reverse();
     //recorrido por cada elemento del array invertido
    for (let i = 0; i < arrayNumTarjeta.length;i++){
      //añadiendo condicional para posicion par 
        if ( i % 2 != 0) {
            arrayNumTarjeta[i] *= 2;
            if (arrayNumTarjeta[i] >= 10){
                arrayNumTarjeta[i] = (arrayNumTarjeta[i] % 10) + (Math.floor(arrayNumTarjeta[i] / 10));
            }
        }      
        suma += parseInt(arrayNumTarjeta[i]);  
    }
     //añadiendo condicional que indicará si es o no válida la tarjeta
    if (suma%10 == 0) {
        return true;
    }else {
        return false;
    }  // prueba (1234567890) --devuelve false--
    
  }
  //ocultando caracteres de la tarjeta 
  , maskify: (creditCardNumber) => {

      let resultados ="";
      for(let i=0; i<creditCardNumber.length; i++ ){
          if(i<=creditCardNumber.length-5){
              resultados+="#";
          }else {
              resultados+=creditCardNumber[i];
          }
      }
    
      return resultados;
  }

};

export default validator;
