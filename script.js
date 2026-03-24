let carrito = [];

function agregar(nombre, precio){
carrito.push({nombre, precio});
actualizar(); // ✅ SOLO actualiza, NO abre
}

function actualizar(){
let lista = document.getElementById("lista");
let total = 0;

if(!lista) return;

lista.innerHTML = "";

carrito.forEach(p=>{
total += p.precio;
lista.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
});

document.getElementById("total").innerText = total;
document.getElementById("contador").innerText = carrito.length;
}

function toggleCarrito(){
document.getElementById("carrito").classList.toggle("active");
}

function comprar(){
let msg="Hola quiero comprar:%0A";
carrito.forEach(p=>{
msg+=`${p.nombre} - $${p.precio}%0A`;
});
window.open(`https://wa.me/573212642907?text=${msg}`);
}