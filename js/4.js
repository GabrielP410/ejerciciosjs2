let suma = 0;

while (true) {
  let ingresado = prompt("Introduce un número:");

  if (ingresado === null) {
    break;
  }

  let numero = parseFloat(ingresado);

  if (!isNaN(numero)) {
    suma += numero;
  } else {
    alert("Por favor, introduce un número válido.");
  }
}

alert("La suma total de los números introducidos es: " + suma);
