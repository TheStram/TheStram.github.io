 // Función para mostrar u ocultar el menú desplegable al hacer clic en el botón
 function toggleDropdown() {
    $(".dropdown-menu").toggleClass("show");
  }

  // Event listener para el botón del dropdown
  $("#dropdownMenuButton").on("click", toggleDropdown);