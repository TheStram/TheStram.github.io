document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento del interruptor por su ID
    const styleSwitch = document.getElementById("style-switch");
  
    // Verifica el estado del interruptor y establece la hoja de estilo correspondiente
    styleSwitch.addEventListener("change", function () {
      if (styleSwitch.checked) {
        // Si el interruptor está activado (dark mode)
        document.getElementById("style-link").setAttribute("href", "assets/styles/styles-dark.css");
      } 
      else {
        // Si el interruptor está desactivado (light mode)
        document.getElementById("style-link").setAttribute("href", "assets/styles/styles-light.css");
      }
    });
  });
  