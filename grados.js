// Variables para los campos de texto del formulario
let celsius;
let fahrenheit;


// Celsius a Fahrenheit
function convertir() {
 celsius = document.getElementById("celsius").value;
 fahrenheit = celsius * (9 / 5) + 32;
 document.getElementById("fahrenheit").value = fahrenheit;
}





// Fahrenheit a Celsius
function convertirInverso() {
 fahrenheit = document.getElementById("fahrenheit").value;
 celsius = (fahrenheit - 32) * 5 / 9;
 document.getElementById("celsius").value = celsius;
}