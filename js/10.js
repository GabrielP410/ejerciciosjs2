const filas = parseInt(prompt("Ingrese un número de filas"));
const columnas = parseInt(prompt("Ingrese un número de columnas"));

let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write(`<tr>`);
    for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
        document.write(`<td>${totalCeldas}</td>`);
        totalCeldas--; // totalCeldas = totalCeldas - 1
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);