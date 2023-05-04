//-----------------------------------------------------------------------------------
//funcion DOM del sitio 
//-----------------------------------------------------------------------------------
function controlar_tamano() {
  var relleno = window.matchMedia("(max-width: 576px)");
  if (relleno.matches) {
    try {
  } catch (error) {}

} else {
  borra();
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
    "top: 20%;" +
    "left: 0%;" +
    "width: 100%;" +
    "height: 33%;" +
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
  device.innerHTML = "Esta APP no es WEB";
  fondo.appendChild(device); //este inserta el label en el button 
  /*-----------------------------------------------------------------*/
  const device1 = document.createElement('label'); //creamos label
  device1.id = 'titulo_device1'; //establecemos el id del label
  device1.className = 'titulo_device1 baja'; //establecemos la clase del label para uso futuro
  let parametros_device1 = //establecemos los parametros aspectos del label
    "position: absolute;" +
    "top: 45%;" +
    "left: 0%;" +
    "width: 100%;" +
    "height: 33%;" +
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
  device1.innerHTML = "utilice dispositivos Mobiles";
  fondo.appendChild(device1); //este inserta el label en el button 
  /*-----------------------------------------------------------------*/
  const device2 = document.createElement('label'); //creamos label
  device2.id = 'titulo_device2'; //establecemos el id del label
  device2.className = 'titulo_device2 baja'; //establecemos la clase del label para uso futuro
  let parametros_device2 = //establecemos los parametros aspectos del label
    "position: absolute;" +
    "top: 70%;" +
    "left: 0%;" +
    "width: 100%;" +
    "height: 33%;" +
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
  device2.setAttribute('style', parametros_device2); //carga los estilos del label
  device2.innerHTML = "TST Grupo1 Cohorte 2022";
  fondo.appendChild(device2); //este inserta el label en el button 
}
}








function mi_Menu() { //funcion para expandir o colapsar menu
  borra();
  const navMenu = document.querySelector(".nav-menu");
  if (navMenu.style.right == "-10px") {
    navMenu.style.right = "-600px";
    let x = document.querySelector('.logo');
    logo.style.display = "flex";
  } else {
    navMenu.style.right = "-10px";
  }
  //borra();
}

function mi_cocina() { //funcion para expandir o colapsar menu
  navMenu = document.querySelector(".nav-menu");
  navMenu.style.right = "-600px";
  x = document.querySelectorAll('.config_form, .time, .cocina');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}

function mi_dormitorio() { //funcion para expandir o colapsar menu
  navMenu = document.querySelector(".nav-menu");
  navMenu.style.right = "-600px";
  x = document.querySelectorAll('.config_form, .time, .dormitorio');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}

function mi_living() { //funcion para expandir o colapsar menu
  navMenu = document.querySelector(".nav-menu");
  navMenu.style.right = "-600px";
  x = document.querySelectorAll('.config_form, .time, .living');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}

function mi_todo() { //funcion para expandir o colapsar menu
  navMenu = document.querySelector(".nav-menu");
  navMenu.style.right = "-600px";
  x = document.querySelectorAll('.config_form, .time, .cocina, .dormitorio, .living ');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}

function mi_acerca() { //funcion para expandir o colapsar menu
  navMenu = document.querySelector(".nav-menu");
  navMenu.style.right = "-600px";
  x = document.querySelectorAll('.config_form, .nosotros, .espacio');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
}


function borra() { //funcion para borrar contenido del form
  x = document.querySelectorAll('.config_form, .time, .cocina, .dormitorio, .living, .nosotros, .logo');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function borra_total() { //funcion para borrar contenido del form
  x = document.querySelectorAll('.config_form, .time, .cocina, .dormitorio, .living, .nosotros, .logo');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.querySelectorAll('.conte, .header, .logo, .config_form');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

// function controlar_tamano(){
//       //  const relleno = matchMedia("(min-width: 577px)");
//       //  const veo = mql => {
//       //    if (mql.matches) {
//       //     // let x = document.getElementById('conte');
//       //     // conte.style.display = "none";
//       //     // ///borra_total();
//       //     //  //alert("detecte pantalla grande")
//       //     //  x = document.getElementById('conte_no');
//       //     // conte_no.style.display = "flex";          
//       //    } else {

//       //     // let x = document.getElementById('conte');
//       //     // conte.style.display = "flex";
//       //     // ///borra_total();
//       //     //  //alert("detecte pantalla grande")
//       //     //  x = document.getElementById('conte_no');
//       //     // conte_no.style.display = "none";  

//       //     }
//       //  }
//       //  /*-----------------------------------------------------------------------------*/
//       //  relleno.addListener(veo);
//       //  veo(relleno);
//       //  console.log(veo)
//       }



















//-----------------------------------------------------------------------------------
//funcion DOM Reloj general para cada div
//------------------------------------------------------------------------------------
//declaracion de variable global
var daylist = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function genTimerStrings(tm, num) {
  var i;
  var ret = tm.toString(10);
  var left = ret.length;
  if (left < num) {
    for (i = 0; i < (num - left); i++) {
      ret = String(0) + ret;
    }
  }
  return ret;
}

function actualizar_Timer() {
  var date = new Date();
  var tm_year, tm_mon, tm_date, tm_hour, tm_min, tm_sec, tm_msec, tm_day, tm_sepa;
  var colon;
  tm_year = date.getFullYear();
  tm_mon = date.getMonth() + 1;
  tm_date = date.getDate();
  tm_day = date.getDay();
  tm_hour = date.getHours();
  tm_min = date.getMinutes();
  tm_sec = date.getSeconds();
  tm_msec = date.getMilliseconds();
  tm_mon = genTimerStrings(tm_mon, 2);
  tm_date = genTimerStrings(tm_date, 2);
  tm_hour = genTimerStrings(tm_hour, 2);
  tm_min = genTimerStrings(tm_min, 2);
  tm_sec = genTimerStrings(tm_sec, 2);
  tm_day = daylist[tm_day];
  tm_sepa = "  ";
  colon = ':';
  document.getElementById("DSEGClock-Year").innerHTML = "<span class=\"D14MI\">" + "  " + tm_day + "  " + "</span><span class=\"D7MI\">" + tm_date + "-" + tm_mon + "-" + tm_year + "</span><span class=\"D7MI\">" + " -  " + tm_hour + colon + tm_min + colon + tm_sec + "</span>";
  setTimeout("actualizar_Timer()", 500 - date.getMilliseconds() % 500);
}
actualizar_Timer();