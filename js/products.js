const OrdenAscendente = "Menor Precio";
const OrdenDescendente = "Mayor Precio";
const OrdenRangoDePrecios = "Precio";

var currentSortCriterio = undefined;
var minPrecio = undefined;
var maxPrecio = undefined;

var listadoProduct= [];

function showProductos(){

    let insertarEnLis = "";

    for(let i = 0; i < listadoProduct.length; i++){
        let show = listadoProduct[i];

        if (((minPrecio == undefined) || (minPrecio != undefined && parseInt(show.cost) >= minPrecio)) &&
        ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(show.cost) <= maxPrecio))){

            insertarEnLis += 
            
            ` <div class="col-md-4">
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
              <img class="bd-placeholder-img card-img-top"  src="` + show.imgSrc + `">
              <h3 class="m-3">${show.name }</h3>
              <div class="card-body">
                <p class="card-text">${show.description}</p>
                <small class="text-muted precio">`+"Precio:  " +show.currency +"  "+show.cost+" <br/>"
                +"  Cantidad vendidos:   "+ show.soldCount +` artículos</small>
              </div>
            </a>
          </div>`
            
        }
    }
        document.getElementById("lis").innerHTML = insertarEnLis;
    }
 
    function ordenarProductos(criterio, listadoProduct){
        let result = [];
        if (criterio === OrdenAscendente)
        {
            result = listadoProduct.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
        }else if (criterio === OrdenDescendente){
            result = listadoProduct.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
        }else if (criterio === OrdenRangoDePrecios){
            result = listadoProduct.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }

    function ordenarYMostrarProductos(sortCriterio, listadoP){
        currentSortCriterio = sortCriterio;
    
        if(listadoP != undefined){
            listadoProduct= listadoP;
        }
    
        listadoProduct = ordenarProductos(currentSortCriterio, listadoProduct);
    
        //Muestro los productos ordenados
        showProductos();
    }

    
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {listadoProduct = resultObj.data;
        
            showProductos(listadoProduct)
            ordenarYMostrarProductos(OrdenAscendente, resultObj.data);  
         
        }
    });
    document.getElementById("ordenAsc").addEventListener("click", function(){
        ordenarYMostrarProductos(OrdenAscendente);
    });

    document.getElementById("ordenDesc").addEventListener("click", function(){
        ordenarYMostrarProductos(OrdenDescendente);
    });

    document.getElementById("sortByCost").addEventListener("click", function(){
        ordenarYMostrarProductos(OrdenRangoDePrecios);
    });

    document.getElementById("botonLimpiar").addEventListener("click", function(){
        document.getElementById("rangoMin").value = "";
        document.getElementById("rangoMax").value = "";

        minPrecio = undefined;
        maxPrecio= undefined;

       showProductos();
    });

    document.getElementById("botonFiltrar").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minPrecio = document.getElementById("rangoMin").value;
        maxPrecio= document.getElementById("rangoMax").value;

        if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0){
            minPrecio = parseInt(minPrecio);
        }
        else{
            minPrecio = undefined;
        }

        if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0){
            maxPrecio = parseInt(maxPrecio);
        }
        else{
            maxPrecio = undefined;
        }

        showProductos();
    });
});