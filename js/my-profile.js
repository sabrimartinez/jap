//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

    document.addEventListener("DOMContentLoaded", function (e) {
     
      if (localStorage.getItem('usnombre') === null||localStorage.getItem('usnombre')===undefined) {
        window.location = "index.html"; 
    } else{  
        document.getElementById('nombreUsuario').innerHTML =
        `Bienvenido : <img src='img/iconoUsuario.svg'>` +localStorage.getItem('usnombre');
        }
      });
    
   
      $("#cierre").click(function(){
      $(location).attr('href','index.html');
      localStorage.clear();
      
     })
    
     //esto es para el menu 

     const menuIc= document.querySelector(".menuIcono");
     const menu= document.querySelector('.menuNavegacion');
     
     menuIc.addEventListener('click',()=>{
       menu.classList.toggle('spread')
     })
     window.addEventListener('click',e=>{
       if(menu.classList.contains('spread')
       && e.target != menu && e.target !=menuIc)
       { menu.classList.toggle('spread')}
     })
