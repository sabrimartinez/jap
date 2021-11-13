//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData( CART_DESAFIATE).then(function(resultObj){
        if (resultObj.status === "ok")
        {datos = resultObj.data;
              productoCarrito=datos.articles
          agregarCarro(productoCarrito);
          sumarCant ();
          agregarCostoEnvio();
         
          document.getElementById("envio").innerHTML= "0"
          document.getElementById("total").innerHTML= "0"

//Deshabilitar campos del modal
document.getElementById('opcion1').addEventListener('click',()=>{
  document.getElementById('cuentaBancaria').disabled=true;
  document.getElementById('numTarjeta').disabled=false;
  document.getElementById('codigoSeguridad').disabled=false;
  document.getElementById('vencimiento').disabled=false;
  

  
  document.getElementById('opcion2').addEventListener('click',()=>{
    
  document.getElementById('cuentaBancaria').disabled=false;
  document.getElementById('numTarjeta').disabled=true;
  document.getElementById('codigoSeguridad').disabled=true;
  document.getElementById('vencimiento').disabled=true;
  })
})
 } 
     })});

     function agregarCarro(array){
    
      let insertar ="";

     for (let i = 0; i < array.length; i++) {
       let element = array[i];  
      if (element.currency==="USD"){
        element.unitCost = element.unitCost*40;
      }
      
       insertar+= `<tr class="fila${i}">
       <th scope="row"></th>
       <td ><img src="${element.src}"  class = "img-responsive" width = "20%" 
       alt="..." ></td>
       <td >${element.name}</td>
       <td >UYU</td>
       <td class="precio" >${element.unitCost}</td>
       
       <td > <input type="number" min="0" class="form-control tabla" onchange="sumarCant()" 
       id="Cantidad${i}" value="${element.count}">
       </td>
       <td class="s"> <span class ="subTotalArticulo" id="subTotal${i}"></span></td>
       <td ><button id =${i} class="btn btn-danger buttonDelete" type="button" onclick =" removerArticulo${i}()">X
       </button></td>
     </tr>
     ` 
     }
        document.getElementById("contenido").innerHTML+=insertar;
       
     }
      function sumarCant (){
        let precio = document.getElementsByClassName("precio");
        let cantidad = document.getElementsByTagName("input");
        
        let subTotal=0;
        for (let i = 0; i < precio.length; i++) {
          let sumar=0;
         
          sumar= parseFloat(precio[i].innerHTML) * parseFloat(cantidad[i].value);
        subTotal+= sumar
        document.getElementById("subTotal"+i).innerHTML=(sumar).toFixed(2);
    }

       document.getElementById("costo").innerHTML=(subTotal).toFixed(2);
       
       document.getElementById("total").innerHTML=(subTotal).toFixed(2)
      }


      function agregarCostoEnvio(value) {
        let costo= document.getElementById("costo");
        
       
        let insertoEnvio=0;
            
        insertoEnvio= (parseFloat(value / 100)*parseFloat(costo.innerHTML))+parseFloat(costo.innerHTML);
        document.getElementById("envio").innerHTML= parseFloat(value / 100)*parseFloat(costo.innerHTML);
        document.getElementById("total").innerHTML=insertoEnvio;  
      }
   

      function removerArticulo0() {
        var fila0 = document.getElementsByClassName('fila0');
       
       $(fila0).remove();
       sumarCant ();
       agregarCostoEnvio();
      }
      function removerArticulo1() {
        
        var fila1= document.getElementsByClassName('fila1');
        
      
       $(fila1).remove();
       
       sumarCant ();
       agregarCostoEnvio(); }

function compra(){
  let calle = document.getElementById('calle').value;
  let num = document.getElementById('numero').value;
  let esquina = document.getElementById('esquina').value;
  let localidad = document.getElementById('localidad').value;

  let tarjeta= document.getElementById('numTarjeta').value;
  let codigo= document.getElementById('codigoSeguridad').value;
  let vencimiento=document.getElementById('vencimiento').value;
  let cuenta= document.getElementById('cuentaBancaria').value;
  
  
let opcion1 = document.getElementById('opcion1').checked;
let opcion2 = document.getElementById('opcion2').checked;

if(calle==""||num===""||esquina==""||localidad==""){Swal.fire({
  icon: 'error',
  title: 'No se pudo efectuar tu compra',
  text: 'Intentalo otra vez, no olvides completar todos los datos',
 
})

}  
  if(opcion1==true&&codigo==""||opcion1==true&&vencimiento==""||opcion1==true&&tarjeta=="")
  {Swal.fire({
    icon: 'error',
    title: 'No se pudo efectuar tu compra',
    text: 'Intentalo otra vez, no olvides completar todos los datos',
   
  })}
if(opcion2==true&&cuenta==""){
  Swal.fire({
    icon: 'error',
    title: 'No se pudo efectuar tu compra',
    text: 'Intentalo otra vez, no olvides completar todos los datos',
   
  })}
if(calle!=""&&num!=""&&esquina!=""&&localidad!=""&&opcion2==true&&cuenta!=""||
calle!=""&&num!=""&&esquina!=""&&localidad!=""&&opcion1==true&&codigo!="" &&vencimiento!="" &&tarjeta!="")
{ Swal.fire(
  'Compra realizada!',
  'Pronto llegará tu producto!',
  'success'
)}}

