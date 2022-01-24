/*//CODIGO HTML DE REFERENCIA
<button id="btnMain">CLICK</button>
//CODIGO JS
let boton         = document.getElementById("btnMain");
boton.onclick     = () => {console.log("Click")};
boton.onmousemove = () => {console.log("Move")}*/

let arrayProductos = [];
const producto1 = {
    nombre: 'Calza Under',
    precio: 150
}
const producto2 = {
    nombre: 'Calza Legging',
    precio: 100
}
const producto3 = {
    nombre: 'Calza Heatgear',
    precio: 200
}
const producto4 = {
    nombre: 'Calza Lana',
    precio: 170
}

let productos = (producto) => {
    json1 = JSON.stringify(producto);
}
let productos2 = (producto) => {
    json2 = JSON.stringify(producto);
}
let productos3 = (producto) => {
    json3 = JSON.stringify(producto);
}
let productos4 = (producto) => {
    json4 = JSON.stringify(producto);
}



let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");

let p1;
let p2;
let p3;
let p4;

let json1;
let json2;
let json3;
let json4;
productos(producto1);
productos2(producto2);
productos3(producto3);
productos4(producto4);

let carrito = document.getElementById("carrito");

boton1.onclick = () => {
    arrayProductos.push(producto1);
    console.log(arrayProductos);
    
    p1 = document.createElement("h4");
    p1.innerHTML = json1;
    carrito.appendChild(p1);
}
boton2.onclick = () => {
    arrayProductos.push(producto2);
    console.log(arrayProductos);

    p2 = document.createElement("h4");
    p2.innerHTML = json2;
    carrito.appendChild(p2);
}
boton3.onclick = () => {
    arrayProductos.push(producto3);
    console.log(arrayProductos);

    p3 = document.createElement("h4");
    p3.innerHTML = json3;
    carrito.appendChild(p3);
}
boton4.onclick = () => {
    arrayProductos.push(producto4);
    console.log(arrayProductos);

    p4 = document.createElement("h4");
    p4.innerHTML = json4;
    carrito.appendChild(p4);
}

