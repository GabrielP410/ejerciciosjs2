var texto = prompt("Introduce un texto:");

var posicion = encontrarPrimeraVocal(texto);

if (posicion !== -1) {
    alert("La primera vocal está en la posición " + posicion);
} else {
    alert("No se encontraron vocales en el texto.");
}

function encontrarPrimeraVocal(texto) {
    texto = texto.toLowerCase();
    var vocales = "aeiou";

    for (var i = 0; i < texto.length; i++) {
        if (vocales.indexOf(texto.charAt(i)) !== -1) {
            return i + 1;
        }
    }

    return -1;
}
