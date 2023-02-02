












document.getElementById('boton').addEventListener('click', function() {
console.log ("Hola mundo desde EvenListener");
document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento"
});

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.body.style.backgroundColor = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}

// Añade un comportamiento al hipervínculo para que se abra en una nueva pestaña
const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    window.open(link.href, "_blank");
  });
});
console.log