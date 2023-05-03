function abre_app() {
    //borra();
     var relleno = window.matchMedia("(max-width: 576px)");
        if (relleno.matches){
    try {

    } catch (error) {
        alert("Error al cargar la baja " + error);
    }

} else {
    /*-----------------------------------------------------------------*/
    /* Creamos div de fondo del formulario e insertamos en el DOM      */
    /*-----------------------------------------------------------------*/
    const fondo = document.createElement('div'); //creamos div
    fondo.id = 'fondo'; //establebecemos el id del div
    fondo.className = 'baja_form baja'; //establecemos la clase del div para uso futuro
    let parametros = //establecemos los parametros aspectos del div
        "position: absolute;" +
        "top: 5%;" +
        "left: 2%;" +
        "width: 95%;" +
        "height: 90%;" +
        "user-select: none;" +
        "align-items: center;" +
        "background-color: rgba(218, 165, 32, 0.3);" +
        "border-radius: 10px;" +
        "border: 2px solid red;" +
        "justify-content: center;";
    fondo.setAttribute('style', parametros);
    document.body.appendChild(fondo); //este inserta el div en el body del HTML 

    /*-----------------------------------------------------------------*/
    const device = document.createElement('label'); //creamos label
    device.id = 'titulo_device0'; //establecemos el id del label
    device.className = 'titulo_device baja'; //establecemos la clase del label para uso futuro
    let parametros_device = //establecemos los parametros aspectos del label
        "position: absolute;" +
        "top: 30%;" +
        "left: 0%;" +
        "width: 100%;" +
        "height: 30%;" +
        "user-select: none;" +
        "color: red;" +
        "font-family: 'Roboto', sans-serif;" +
        "align-items: center;" +
        "font-size: 50px;" +
        "text-align: center;" +
        "line-height: 28px;" +
        "font-weight: bold;" +
        "justify-content: center;" +
        "background-color: transparent;";
    device.setAttribute('style', parametros_device); //carga los estilos del label
    device.innerHTML = "Este dispositivo NO es compatible ";
    fondo.appendChild(device); //este inserta el label en el button 
    /*-----------------------------------------------------------------*/
    const device1 = document.createElement('label'); //creamos label
    device1.id = 'titulo_device1'; //establecemos el id del label
    device1.className = 'titulo_device1 baja'; //establecemos la clase del label para uso futuro
    let parametros_device1 = //establecemos los parametros aspectos del label
        "position: absolute;" +
        "top: 60%;" +
        "left: 0%;" +
        "width: 100%;" +
        "height: 30%;" +
        "user-select: none;" +
        "color: red;" +
        "font-family: 'Roboto', sans-serif;" +
        "align-items: center;" +
        "font-size: 50px;" +
        "text-align: center;" +
        "line-height: 28px;" +
        "font-weight: bold;" +
        "justify-content: center;" +
        "background-color: transparent;";
    device1.setAttribute('style', parametros_device1); //carga los estilos del label
    device1.innerHTML = "utilice solo dispositivos Mobiles";
    fondo.appendChild(device1); //este inserta el label en el button 
}

}




function acomodar_sitio(){
                //console.log("hola la clave esta bien ")
                localStorage.removeItem("site_" + y); //borro los sitios
                for (j = 0; j < 8; j++) {
                  var z = localStorage.getItem('site_' + j);
                  if (z == null) {
                    var mover = true;
                  } else if (mover == true) {
                    var z = localStorage.getItem('site_' + j);
                    localStorage.removeItem("site_" + j); //borro los sitios
                    localStorage.setItem('site_' + (j - 1), z);
                    mover = false;
                  }
                }
                document.getElementById('lista_sitios_eliminar').reset();
                borra();
}

/*--------------------------------------------------*/
/* boton de eliminar enable/disable                 */
/*--------------------------------------------------*/
function eliminar_Enable() {
  x = document.querySelectorAll(".boton_eliminar");
  for (i = 0; i < x.length; i++) {
    x[i].disabled = false;
    x[i].style.opacity = '1';
    x[i].style.backgroundColor = "transparent";
    x[i].style.borderColor = "red";
  }
  x = document.querySelectorAll(".label_eliminar");
  for (i = 0; i < x.length; i++) {
    x[i].disabled = true;
    x[i].style.color = 'red';
    x[i].style.backgroundColor = "transparent";
   }

}

function eliminar_Disable() {
  x = document.querySelectorAll(".boton_eliminar");
  for (i = 0; i < x.length; i++) {
    x[i].disabled = true;
    x[i].style.opacity = '1';
    x[i].style.backgroundColor = "grey";
    x[i].style.borderColor = "grey";
  }
  x = document.querySelectorAll(".label_eliminar");
  for (i = 0; i < x.length; i++) {
    x[i].disabled = true;
    x[i].style.color = 'white';
    x[i].style.opacity = '1';
    x[i].style.backgroundColor = "transparent";
   }

 }

/*--------------------------------------------------*/
/* funcion para eliminar un sitio del cache         */
/*--------------------------------------------------*/


function eliminar_sitio(){
                //console.log("hola la clave esta bien ")
                 localStorage.removeItem('site_' + y); //borro los sitios

                 for (j = 0; j < 8; j++) {
                   z = localStorage.getItem('site_' + j);
                   if (z == null) {
                     var mover = true;
                   } else if (mover == true) {
                     z = localStorage.getItem('site_' + j);
                     localStorage.removeItem("site_" + j); //borro los sitios
                     localStorage.setItem('site_' + (j - 1), z);
                     mover = false;
                   }
                 }

                 document.getElementById('lista_sitios_eliminar').reset();
                // borra();
}
