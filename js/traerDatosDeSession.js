document.addEventListener("DOMContentLoaded", function (e) {
     
    traerDatos(); //sessionStorage.clear();
      }
      );
    
     function traerDatos (){
       var a= sessionStorage.getItem('nombrePerfil');
       var b= sessionStorage.getItem('apellidoPerfil');
       var c= sessionStorage.getItem('correoPerfil');
       var d= sessionStorage.getItem('telefonoPerfil');
       var e= sessionStorage.getItem('edadPerfil');

       var f= sessionStorage.getItem('imagenAvatar');

       document.getElementById('nombreGuardado').innerHTML= JSON.parse(a);
       document.getElementById('apellidoGuardado').innerHTML= JSON.parse(b);
       document.getElementById('emailGuardado').innerHTML= JSON.parse(c);
       document.getElementById('telefonoGuardado').innerHTML= JSON.parse(d);
       document.getElementById('edadGuardado').innerHTML= JSON.parse(e);

       document.getElementById('aqui').src= JSON.parse(f);
      }

      $(".editarPerfil").click(function(){

       var traerNombre= document.getElementById('nombreGuardado').textContent;
       var traerApellido= document.getElementById('apellidoGuardado').textContent;
       var traerEmail= document.getElementById('emailGuardado').textContent;
       var traerTelefono= document.getElementById('telefonoGuardado').textContent;
       var traerEdad= document.getElementById('edadGuardado').textContent;
       
       var traerAvatar = document.getElementById('aqui').src;
      

       document.getElementById('nombre').value =traerNombre;
       document.getElementById('apellido').value =traerApellido;
       document.getElementById('email').value =traerEmail;
       document.getElementById('telefono').value =traerTelefono;
       document.getElementById('edad').value =traerEdad;

       document.getElementById('agregarAvatar').innerHTML =
       ` <img id="" src="${traerAvatar}"></img>`
       
      }   
        )
       