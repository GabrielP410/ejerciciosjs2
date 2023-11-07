let cadenaEntrada = prompt("Por favor, ingresa una cadena de texto:");

if (cadenaEntrada !== null && cadenaEntrada !== "") {
    let cadenaResultado = "";

    for (let i = 0; i < cadenaEntrada.length; i++) {
        cadenaResultado += cadenaEntrada[i];

        if (i !== cadenaEntrada.length - 1) {
            cadenaResultado += "-";
        }
    }

    document.write(cadenaResultado);
} else {
    document.write("La cadena ingresada no es válida.");
}
