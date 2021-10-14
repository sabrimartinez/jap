//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData( CART_DESAFIATE).then(function(resultObj){
        if (resultObj.status === "ok")
        {datos = resultObj.data;
              productoCarrito=datos.articles
          agregarCarro(productoCarrito);
          sumarCant ()
       
    } 
     })});

     function agregarCarro(array){
    
      let insertar ="";

     for (let i = 0; i < array.length; i++) {
       const element = array[i];  
      if (element.currency==="USD"){
        element.unitCost = element.unitCost*40;
      }
      
       insertar+= `<tr>
       <th scope="row"></th>
       <td ><img src="${element.src}"  class = "img-responsive" width = "20%" 
       alt="..." ></td>
       <td >${element.name}</td>
       <td >UYU</td>
       <td class="precio" >${element.unitCost}</td>
       
       <td > <input type="number" min="0" class="form-control" onchange="sumarCant()" 
       id="Cantidad${i}" value="${element.count}">
       </td>
       <td class="s"> <span id="subTotal${i}"></span></td>
     </tr>
     <div ></div>` 
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


      
function btnCompra (){


      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta acción aún no funciona!',
        footer: '<a href="cart.html">Te gustaria seguir mirando?</a>'
      })}