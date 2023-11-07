let cadenas = [];

function obtenerCadenas() {
  let cadena = prompt("Ingresa una cadena de texto:");

  while (cadena !== null) {
    cadenas.push(cadena);
    const continuar = confirm("¿Quieres ingresar otra cadena?");

    if (!continuar) {
      break;
    }

    cadena = prompt("Ingresa otra cadena de texto:");
  }

  alert("Cadenas concatenadas: " + cadenas.join("-"));
}

obtenerCadenas();
