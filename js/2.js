const nota = prompt("Ingrese una nota (número de 0 a 10):");

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    nota = parseFloat(nota);

    if (nota >= 0 && nota <= 2) {
        alert("Muy deficiente");
    } else if (nota >= 3 && nota <= 4) {
        alert("Insuficiente");
    } else if (nota >= 5 && nota <= 6) {
        alert("Suficiente");
    } else if (nota === 7) {
        alert("Bien");
    } else if (nota >= 8 && nota <= 9) {
        alert("Notable");
    } else if (nota === 10) {
        alert("Sobresaliente");
    }
} else {
    if (isNaN(nota)) {
        alert("Introduce un número válido");
    } else {
        alert("Número erróneo");
    }
}
