//Ejercicio 1
var distancia;
distancia = prompt("Ingrese la distancia en metros a recorrer: ");
if (distancia > 0 && distancia < 1000) {
    document.write("El recorrido debe hacerse a pie.")}
else {
    if (distancia > 1000 && distancia < 10000) {
        document.write("El recorrido debe hacerse en bicicleta.")}
    else{
        if(distancia > 10000 && distancia < 30000){
            document.write("El recorrido debe hacerse en colectivo.")}
            else{
                if(distancia > 30000 && distancia < 100000){
                    document.write("El recorrido debe hacerse en auto.")}
                    else{
                        if (distancia > 100000){
                            document.write("El recorrido debe hacerse en avion.")
                        }
                    }
            }
    }
}

//Ejercicio 2
//Esta función resuelve el ejercicio 
//var numeros = [5, 3, -1, 25, 18, 90, 65, 2, 0, 15];
//console.log(numeros);
//console.log(Math.max.apply(null, numeros));

//Creo una funcion que calcula em maximo elemento de un array de numeros
let max = (numeros, max= numeros[0])=>{
    for(i=0; i < numeros.length; i++){
        if (max < numeros[i]){
            max = numeros[i];
        }
    }
    return max
}
var numeros = [5, 3, -1, 25, 18, 90, 65, 2, 0, 15];
console.log(numeros);
console.log("El elemento maximo del array es: "+ max(numeros));