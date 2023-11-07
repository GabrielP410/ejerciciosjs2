function piramide(numero) {
    if (numero > 50) {
        console.log("Por favor, ingrese un número no mayor a 50.");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        let espacios = ' '.repeat(numero - i);
        let linea = String(i).repeat(i);
        console.log(espacios + linea);
    }
}

let numeroUsuario = parseInt(prompt("Ingrese un número para la pirámide (no mayor a 50):"));

if (!isNaN(numeroUsuario)) {
    piramide(numeroUsuario);
} else {
    console.log("Por favor, ingrese un número válido.");
}
