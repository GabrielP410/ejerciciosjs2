let textoOriginal = prompt("Ingrese una cadena de texto:");

function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

let textoInvertido = invertirCadena(textoOriginal);

/* document.write("Cadena original: " + textoOriginal); */
document.write("Cadena invertida: " + textoInvertido);