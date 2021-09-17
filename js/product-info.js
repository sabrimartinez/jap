
              document.addEventListener("DOMContentLoaded", function(e){
               getJSONData( PRODUCT_INFO_URL ).then(function(resultObj2){
                   if (resultObj2.status === "ok")
                   {
                      dataInf = resultObj2.data;
            

              let nombreInfo = document.getElementById("nombreI");
            let precioInfo = document.getElementById("precioI");
            let descInfo= document.getElementById("descI");
            let catInfo= document.getElementById("categoriaI");
            let cantInfo = document.getElementById("cantidadV");
            
            nombreInfo.innerHTML= dataInf.name;
            precioInfo.innerHTML+=dataInf.cost;
            descInfo.innerHTML=dataInf.description;
            catInfo.innerHTML=dataInf.category;
            cantInfo.innerHTML=dataInf.soldCount;

            showImgGallery(dataInf.images);
            
        }
     })});
   
     var dataInf = {};

     function showImgGallery(array){
     
         let imgProducto = "";
     
         for(let i = 0; i < array.length; i++){
             let image= array[i];
     
             imgProducto+= `
             <div class="col-lg-3 col-md-4 col-6">
                 <div class="d-block mb-4 h-100">
                     <img class="img-fluid img-thumbnail" src="` + image+ `" alt="">
                 </div>
             </div>
             `
     
             document.getElementById("imgI").innerHTML = imgProducto;
         }
     }

     document.addEventListener("DOMContentLoaded", function(e){
      getJSONData(  PRODUCT_INFO_COMMENTS_URL ).then(function(resultObj3){
          if (resultObj3.status === "ok")
          { coment= resultObj3.data;

                 showcomment(coment);
               
        }
      })});

      var coment= [];
      function showcomment(){
         
      let mostrarcoment = "";
      for (let i = 0; i < coment.length; i++) {
         let element = coment[i];
         if(element.score=== 1){
            element.score= ` <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
        

        
         mostrarcoment += `  <div class="container p-3 mb-2 bg-light text-dark ">
         <div class="row">
         <div class="col-2" > <img src='img/comentarios.svg'></div>
         <div class="col-md-10 text-success"><h5>`+element.user+`</h5><br></div></div>
         <div class="row">
         <div class="col" >  <p>`+element.description+   `</p></div></div>
         <div class="row">
         <div class="col"><div><p>`+element.score+`</p></div></div></div>
         <div class="row">
         <div class="col text-muted"><div><p>`+element.dateTime+`</p></div></div></div></div></div>
      `
      }
      if(element.score=== 2){
        element.score= ` <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>`
    

    
     mostrarcoment += `  <div class="container p-3 mb-2 bg-light text-dark ">
     <div class="row">
     <div class="col-2" > <img src='img/comentarios.svg'></div>
     <div class="col-md-10 text-success"><h5>`+element.user+`</h5><br></div></div>
     <div class="row">
     <div class="col" >  <p>`+element.description+   `</p></div></div>
     <div class="row">
     <div class="col"><div><p>`+element.score+`</p></div></div></div>
     <div class="row">
     <div class="col text-muted"><div><p>`+element.dateTime+`</p></div></div></div></div></div>
  `
  } if(element.score=== 3){
    element.score= ` <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>`



 mostrarcoment += `  <div class="container p-3 mb-2 bg-light text-dark ">
 <div class="row">
 <div class="col-2" > <img src='img/comentarios.svg'></div>
 <div class="col-md-10 text-success"><h5>`+element.user+`</h5><br></div></div>
 <div class="row">
 <div class="col" >  <p>`+element.description+   `</p></div></div>
 <div class="row">
 <div class="col"><div><p>`+element.score+`</p></div></div></div>
 <div class="row">
 <div class="col text-muted"><div><p>`+element.dateTime+`</p></div></div></div></div></div>
`
} if(element.score=== 4){
    element.score= ` <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>`



 mostrarcoment += `  <div class="container p-3 mb-2 bg-light text-dark ">
 <div class="row">
 <div class="col-2" > <img src='img/comentarios.svg'></div>
 <div class="col-md-10 text-success"><h5>`+element.user+`</h5><br></div></div>
 <div class="row">
 <div class="col" >  <p>`+element.description+   `</p></div></div>
 <div class="row">
 <div class="col"><div><p>`+element.score+`</p></div></div></div>
 <div class="row">
 <div class="col text-muted"><div><p>`+element.dateTime+`</p></div></div></div></div></div>
`
} if(element.score=== 5){
    element.score= ` <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>`



 mostrarcoment += `  <div class="container p-3 mb-2 bg-light text-dark ">
 <div class="row">
 <div class="col-2" > <img src='img/comentarios.svg'></div>
 <div class="col-md-10 text-success"><h5>`+element.user+`</h5><br></div></div>
 <div class="row">
 <div class="col" >  <p>`+element.description+   `</p></div></div>
 <div class="row">
 <div class="col"><div><p>`+element.score+`</p></div></div></div>
 <div class="row">
 <div class="col text-muted"><div><p>`+element.dateTime+`</p></div></div></div></div></div>
`
}}
     document.getElementById("muestroComent").innerHTML = mostrarcoment;
         
     }
 //Para la entrega 4
     document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(  PRODUCTS_URL ).then(function(resultObj4){
            if (resultObj4.status === "ok")
            { products= resultObj4.data;
  
                   productsRel(products);
                 
          }
        })});
         
  
    function productsRel(array){
      let relacionados= "";
        for (let i = 0; i < dataInf.relatedProducts.length; i++) {
            let l = array [dataInf.relatedProducts[i]];
       
        relacionados += ` 
       
        
          <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="`+l.imgSrc+`" class="card-img-top" alt="producto">
          <div class="card-body">
            <h5 class="card-title">`+l.name+`</h5>
            <p class="card-text">`+l.description+`</p>
            <a href="products.html" class="btn btn-outline-info">Ver Producto</a>
          </div>
        </div>
      </div>
      ` 
        }document.getElementById('rel').innerHTML=relacionados;
        }
   
      
     // CON DESAFIATE DESDE AQUI 
     

const comentar= document.getElementById('comment')
comentar.onclick= function(){
 
  const nameComent=localStorage.getItem('usnombre');

  const comentarr=document.getElementById("comentario").value;
  const puntaje=document.getElementById("puntua").value;
  let juntar={
   
    comenta:comentarr,
    
    name:nameComent,
    
  }
  
  let usar=Object.values(juntar);
  let muestro="";


  

muestro += `  <div class="container p-3 mb-2 bg-light text-dark ">
<div class="row">
<div class="col-2" > <img src='img/comentarios.svg'></div>
<div class="col-md-10 text-success"><h5>`+usar[1]+`</h5><br></div></div>
<div class="row">
<div class="col" >  <p>`+usar[0]+   `</p></div></div>

<div class="row">
 <div class="col"><div><p>`+calificar(puntaje)+`</p></div></div></div>
 <div class="row">
 <div class="col text-muted"><div><p>`+fechaYHora+`</p></div></div></div></div></div>
`

document.getElementById('comentarios').innerHTML=muestro;
}


function calificar(num){

  let estrellitas ="";

  for (let index = 1; index <=5; index++) {
    if ( index <= num){
      estrellitas+='<i class="fa fa-star checked"></i>';
    } else{
      estrellitas+='<i class="fa fa-star"></i>';
    }
    
  } return estrellitas;
}

// funciones para obtener hora y fecha actual

var hoy = new Date();
var fecha =  hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+ hoy.getDate();
var hora = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
var fechaYHora = fecha +' '+hora;