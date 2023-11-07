let edad = prompt("Ingrese su edad:");

edad = parseInt(edad);

if (isNaN(edad)) {
  document.write("Por favor, ingrese una edad válida.");
} else {
  if (edad >= 18) {
    document.write("¡Ya puede conducir!");
  } else {
    document.write("Lo siento, aún no puede conducir.");
  }
}
