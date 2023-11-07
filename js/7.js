function piramideInversa(numero) {
    if (numero > 50) {
        console.log("Por favor, ingrese un número no mayor a 50.");
        return;
    }

    for (let i = numero; i > 0; i--) {
        let linea = String(i).repeat(i);
        console.log(linea);
    }
}

let numeroUsuario = parseInt(prompt("Ingrese un número para la pirámide inversa (no mayor a 50):"));

if (!isNaN(numeroUsuario)) {
    piramideInversa(numeroUsuario);
} else {
    console.log("Por favor, ingrese un número válido.");
}




