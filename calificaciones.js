/*Solicite una nota (número). Muestra la calificación según la calificación:

0-3: Muy pobre

3-5: Insuficiente

5-6: Suficiente

6-7: Está bien

7-9: Notable

9-10: Sobresaliente*/ 


let puntaje = prompt("Ingresela calificacion del estudiante:")

if (puntaje >= 0 && puntaje <= 3) {
    document.write("Muy pobre")
    
} else if (puntaje >= 3 && puntaje < 5) {
    document.write("Insuficiente")
} else if (puntaje >= 5 && puntaje < 6) {
    document.write("Suficiente")
} else if (puntaje >= 6 && puntaje < 7) {
    document.write("Está bien")
} else if (puntaje >= 7 && puntaje < 9) {
    document.write("Notable")
} else if (puntaje >= 9 && puntaje < 10) {
    document.write("Sobresaliente")
} 




