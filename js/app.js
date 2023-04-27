//-----------------------------------------------------------------------------------
//funcion DOM del sitio trabaja sobre el NAVBAR expandiendo o colapsando menu
//-----------------------------------------------------------------------------------
function mi_Menu() { //funcion para expandir o colapsar menu
  borra();
     const navMenu = document.querySelector(".nav-menu");
     if (navMenu.style.right=="-10px") {
     navMenu.style.right="-600px";
     let x = document.querySelector('.logo');
           logo.style.display = "flex";
     }else{
     navMenu.style.right="-10px";
     }
   //borra();
  }

  function mi_cocina() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
    x = document.querySelectorAll('.config_form, .time, .cocina');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
   }

   function mi_dormitorio() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
    x = document.querySelectorAll('.config_form, .time, .dormitorio');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
   }

   function mi_living() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
    x = document.querySelectorAll('.config_form, .time, .living');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
   }

  function mi_todo() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
    x = document.querySelectorAll('.config_form, .time, .cocina, .dormitorio, .living ');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
    }
   }

  function mi_acerca() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
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

function controlar_tamano(){
       const relleno = matchMedia("(min-width: 577px)");
       const veo = mql => {
         if (mql.matches) {
          // let x = document.getElementById('conte');
          // conte.style.display = "none";
          // ///borra_total();
          //  //alert("detecte pantalla grande")
          //  x = document.getElementById('conte_no');
          // conte_no.style.display = "flex";          
         } else {

          // let x = document.getElementById('conte');
          // conte.style.display = "flex";
          // ///borra_total();
          //  //alert("detecte pantalla grande")
          //  x = document.getElementById('conte_no');
          // conte_no.style.display = "none";  

          }
       }
       /*-----------------------------------------------------------------------------*/
       relleno.addListener(veo);
       veo(relleno);
       console.log(veo)
      }



















//-----------------------------------------------------------------------------------
//funcion DOM Reloj general para cada div
//------------------------------------------------------------------------------------
//declaracion de variable global
     var daylist = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    function genTimerStrings(tm, num){
     	var i;
    	var ret = tm.toString(10);
    	var left = ret.length;
    	if( left < num){
    		for(i=0; i<( num - left ); i++ ){
    			ret = String(0) + ret;
    		}
    	}
    	return ret;
    }

    function actualizar_Timer(){
    	var date = new Date();
    	var tm_year, tm_mon, tm_date, tm_hour, tm_min, tm_sec, tm_msec,tm_day, tm_sepa;
    	var colon;
    	tm_year = date.getFullYear();
    	tm_mon = date.getMonth()+1;
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
     	document.getElementById("DSEGClock-Year").innerHTML = "<span class=\"D14MI\">"+ "  " + tm_day  + "  " +  "</span><span class=\"D7MI\">" + tm_date + "-" + tm_mon + "-" + tm_year + "</span><span class=\"D7MI\">" + " -  "+ tm_hour + colon + tm_min +  colon +  tm_sec + "</span>";
      setTimeout("actualizar_Timer()", 500 - date.getMilliseconds()%500 );
    }
    actualizar_Timer();


