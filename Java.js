// Función para mostrar el año actual en el pie de página
function mostrarAnioActual() {
  var fecha = new Date();
  var anio = fecha.getFullYear();
  var parrafo = document.createElement("p");
  parrafo.innerHTML = "©" + anio + " por Mi nombre. Todos los derechos reservados.";
  document.querySelector("footer").appendChild(parrafo);
}

// Función para mostrar y ocultar el menú de navegación en dispositivos móviles
function mostrarMenu() {
  var nav = document.querySelector("nav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// Agregar evento de clic al botón del menú en dispositivos móviles
document.querySelector(".menu-icon").addEventListener("click", mostrarMenu);

// Llamar a la función para mostrar el año actual en el pie de página
mostrarAnioActual();
