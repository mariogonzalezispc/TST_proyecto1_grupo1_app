//-----------------------------------------------------------------------------------
//funcion DOM del sitio trabaja sobre el NAVBAR expandiendo o colapsando menu
//-----------------------------------------------------------------------------------
function mi_Menu() { //funcion para expandir o colapsar menu
     const navMenu = document.querySelector(".nav-menu");
     if (navMenu.style.right=="-10px") {
     navMenu.style.right="-600px";
     }else{
     navMenu.style.right="-10px";
     }
  
    borra();
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

    x = document.querySelectorAll('.config_form, .time, .cocina, .dormitorio, .living, .nosotros');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

 }























//-----------------------------------------------------------------------------------
//funcion DOM Reloj general para cada div
//------------------------------------------------------------------------------------
//declaracion de variable global
     var daylist = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    // (function(scope){ 
    //         scope.$watch('msg', function(msg) {
    //            if (typeof(msg.payload) != "undefined") $("#DSEGTemp").text(msg.payload);
    //            if (typeof(msg.colour) != "undefined") 
    //                         { 
    //                          if (msg.colour=="orange"){ $(".Clock-Wrapper").css('background-color', '#fb7c00');  $(".lcdClock").css('color', '#222'); } 
    //                          if (msg.colour=="green") { $(".Clock-Wrapper").css('background-color', '#66ac66');  $(".lcdClock").css('color', '#222'); }                            
    //                          if (msg.colour=="blue")  { $(".Clock-Wrapper").css('background-color', '#8888ff');  $(".lcdClock").css('color', '#222'); }
    //                          if (msg.colour=="yellow"){ $(".Clock-Wrapper").css('background-color', '#bbbb44');  $(".lcdClock").css('color', '#222'); } 
    //                          if (msg.colour=="white") { $(".Clock-Wrapper").css('background-color', '#aaaaaa');  $(".lcdClock").css('color', '#222'); } 
    //                          if (msg.colour=="pink")  { $(".Clock-Wrapper").css('background-color', '#ff8888');  $(".lcdClock").css('color', '#222'); } 
    //                          if (msg.colour=="red")  { $(".Clock-Wrapper").css('background-color', '#aa2222');  $(".lcdClock").css('color', '#ccaa22'); } 
    //                         }
    //         });
    // })(scope);


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
    	var ret;
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
     	document.getElementById("DSEGClock-Year").innerHTML = "<span class=\"D14MI\">"+ " - " + tm_day  + " - " +  "</span><span class=\"D7MI\">" + tm_date + "-" + tm_mon + "-" + tm_year + "</span><span class=\"D7MI\">" + "  -  "+ tm_hour + colon + tm_min +  colon +  tm_sec + "</span>";
      setTimeout("actualizar_Timer()", 500 - date.getMilliseconds()%500 );
    }
    actualizar_Timer();


