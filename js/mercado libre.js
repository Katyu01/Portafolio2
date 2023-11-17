let mainContent = document.getElementById("mainContent");
let boxProducto = document.createElement("div");

mainContent.appendChild("boxProducto");
boxProducto.setAttribute ("class", "box-producto")

let boxImgProducto =document.createElement("div");
boxProducto.appendChild(boxImgProducto);
boxImgProducto.setAttribute("class", "box-img-producto");


let boxTnfProducto =document.createElement("div");
boxProducto.appendChild (boxInfoProducto);


let imgProducto = document.createElement ("img");
boxImgProducto.appendChild(imgProducto);
imgProducto.setAttribute("src", "img/airpods.png");
imgProducto.setAttribute("class", "img-producto")
