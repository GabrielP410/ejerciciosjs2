
let nombres = [];
let edades = [];

for (var i = 0; i < 3; i++) {
    nombres[i] = prompt("Ingrese el nombre de la persona " + (i + 1) + ":");
    edades[i] = parseFloat(prompt("Ingrese la edad de la persona " + (i + 1) + ":"));
}

var indiceMayor = edades.indexOf(Math.max(...edades));

document.write("La persona más mayor es: " + nombres[indiceMayor]);
