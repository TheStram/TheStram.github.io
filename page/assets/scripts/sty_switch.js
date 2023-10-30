function setStyleCookie(style) {
  const expirationDate = new Date();
  // La cookie expirará en 30 días
  expirationDate.setDate(expirationDate.getDate() + 30);

  // Configura la cookie con el nombre "style" y el valor del estilo seleccionado
  document.cookie = `style=${style}; expires=${expirationDate.toUTCString()}; path=/`;
}

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

document.addEventListener("DOMContentLoaded", function () {
  const styleSwitch = document.getElementById("style-switch");
  const logoImage = document.getElementById("Logo00");

  // Comprueba si hay una cookie "style" almacenada
  const storedStyle = getCookie("style");

  // Si se encuentra una cookie "style", aplica el estilo almacenado
  if (storedStyle) {
    if (storedStyle === "night") {
      styleSwitch.checked = true;
      document.getElementById("style-link").setAttribute("href", "assets/styles/styles-dark.css");
      logoImage.setAttribute("src", "assets/images/Logo-night.png");
    } else {
      styleSwitch.checked = false;
      document.getElementById("style-link").setAttribute("href", "assets/styles/styles-light.css");
      logoImage.setAttribute("src", "assets/images/Logo-day.png");
    }
  }

  styleSwitch.addEventListener("change", function () {
    if (styleSwitch.checked) {
      // Si el interruptor está activado (dark mode)
      document.getElementById("style-link").setAttribute("href", "assets/styles/styles-dark.css");
      logoImage.setAttribute("src", "assets/images/Logo-night.png");
      setStyleCookie("night");
    } else {
      // Si el interruptor está desactivado (light mode)
      document.getElementById("style-link").setAttribute("href", "assets/styles/styles-light.css");
      logoImage.setAttribute("src", "assets/images/Logo-day.png");
      setStyleCookie("day");
    }
  });
});
