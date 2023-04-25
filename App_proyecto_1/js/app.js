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
  

  function mi_tablero() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
  
   }

  function mi_acerca() { //funcion para expandir o colapsar menu
    navMenu = document.querySelector(".nav-menu");
    navMenu.style.right="-600px";
  
  }


  function borra() { //funcion para borrar contenido del form

 }