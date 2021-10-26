
const avatars = [{"id":1,"avatar":"https://robohash.org/aliquidetvelit.png?size=150x150&set=set1"},
{"id":2,"avatar":"https://robohash.org/laboreinsequi.png?size=150x150&set=set1"},
{"id":3,"avatar":"https://robohash.org/etnequevoluptatem.png?size=150x150&set=set1"},
{"id":4,"avatar":"https://robohash.org/quisnonconsequuntur.png?size=150x150&set=set1"},
{"id":5,"avatar":"https://robohash.org/ducimusquivelit.png?size=150x150&set=set1"},
{"id":6,"avatar":"https://robohash.org/eumconsequaturperspiciatis.png?size=150x150&set=set1"},
{"id":7,"avatar":"https://robohash.org/minusvoluptasquia.png?size=150x150&set=set1"},
{"id":8,"avatar":"https://robohash.org/etipsamducimus.png?size=150x150&set=set1"},
{"id":9,"avatar":"https://robohash.org/perferendisfuganobis.png?size=150x150&set=set1"},
{"id":10,"avatar":"https://robohash.org/etomnisneque.png?size=150x150&set=set1"}]





function agregarAvatar (avatars){
  var traerAvatares="";
 
      
  for (let i = 0;  i < avatars.length; i++) {
    const element = avatars[i];
   
     traerAvatares =  `
    <option value="${i}">Avatar ${element.id}  <img id="${i}" src="${element.avatar}"></img></option>
    `  
    document.getElementById('selectorDeAvatares').innerHTML+=traerAvatares;   
  }
 } 

  function insertarImagen (avatars){
   
       var guardar = "";
       var a = document.querySelector('#selectorDeAvatares').value;
  
       guardar =` <img id="${a}" src="${avatars[a].avatar}"></img>`
       document.getElementById('agregarAvatar').innerHTML =guardar;
}
 
   
 function guardarDatos (){
      var nombre= document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var correo = document.getElementById('email').value;
      var telefono= document.getElementById('telefono').value;
      var edad= document.getElementById('edad').value;

      var imagen = document.querySelector('#agregarAvatar img').src;
  
     sessionStorage.setItem('imagenAvatar',JSON.stringify(imagen));

     sessionStorage.setItem('nombrePerfil',JSON.stringify(nombre));
     sessionStorage.setItem('apellidoPerfil',JSON.stringify(apellido));
     sessionStorage.setItem('correoPerfil',JSON.stringify(correo));
     sessionStorage.setItem('telefonoPerfil',JSON.stringify(telefono));
     sessionStorage.setItem('edadPerfil',JSON.stringify(edad));
     

     $(location).attr('href','my-profile.html')}
     
     



// boton de Cierre de Sesion 
     $("#cierre").click(function(){

      Swal.fire({
        title: 'Ya te vas?',
        text: "Tenemos muchas ofertas para ti!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar Sesión'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Sesión Cerrada!',
            'Vuele pronto!'
          )
          $(location).attr('href','index.html');
         localStorage.clear();
        }
      })

   
    
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

    /// eventos que se ejecuntan al cargar la pagina 
  
     document.addEventListener("DOMContentLoaded", function (e) {
     
      if (localStorage.getItem('usnombre') === null||localStorage.getItem('usnombre')===undefined) {
        window.location = "index.html"; 
    } 
    else{  
      document.getElementById('nombreUsuario').innerHTML =
      `Bienvenido : <img src='img/iconoUsuario.svg'>` +localStorage.getItem('usnombre');
      
     
    
      }
    if(sessionStorage.getItem('imagenAvatar') != null || sessionStorage.getItem('imagenAvatar') != undefined){
      var f= sessionStorage.getItem('imagenAvatar');
        document.getElementById('aquiTambien').src= JSON.parse(f)
     
    } 
        agregarAvatar(avatars);
       
       });