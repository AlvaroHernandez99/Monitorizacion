window.onload = function (){
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos = {"elementos":
[   {"nombre":"Termómetro","descripcion":"Medidor temperatura","numero de serie":"2342342","estado":"activo","prioridad":"media"}, 
    {"nombre":"Sensor Proximidad","descripcion":"cuando se acerca alguien pita","numero de serie":"334334","estado":"activo","prioridad":"alta"},
    {"nombre":"Sensor lumínico","descripcion":"cuando se hace sol se apaga","numero de serie":"5464564","estado":"inactivo","prioridad":"baja"}
]}


function insertarFila(){
    //seleccionamos la tabla
    const miTabla = document.querySelector("#tablaElemento");
    const tablaCuerpo = document.querySelectorAll("#tablaCuerpo");

    //miTabla.appendChild(tablaCuerpo);
    
    //Recorrer array de elemetos para poder sacar los datos
    for (let index = 0; index < elementos.elementos.length; index++) {
        //console.log(elementos.elementos[index]);

        let elementTr = document.createElement("tr");
        let elementTd = document.createElement("td");

        index.innerHTML = elementos.elementos[0]["numero de serie"];
        elementTr.appendChild(elementTd);
        miTabla.appendChild(elementTd);

    }












}


/* // EJEMPLO PARA CREAR ELEMENTO, METERLO DENTRO DIBUJARLO EN LA TABLA, HACERLO EN MODO BUCLE

let numSerOneTr = document.createElement("tr");
let numSerOneTd = document.createElement("td");
numSerOneTd.innerHTML = elementos.elementos[0]["numero de serie"];
numSerOneTr.appendChild(numSerOneTd);
tabla.appendChild(numSerOneTd); */

















function borrarFila(tabla){
    //seleccionamos la tabla
    tabla = document.querySelector("#tablaElemento");
    // Le pasamos el rowIndex (es el indice para que sepa que fila borrar)

    const rowIndex = tabla.parentNode.rowIndex;

    document.querySelector("#tablaElemento").deleteRow(rowIndex);
}


function filtrarResult(){
    //buscar por nonmbre || descripcion
    //empiece a buscar a partir del 3º carácter
    //Resaltar resultados de la búsqueda con css ó dejar solo los resultados en la tabla
    //Puede haber varias coincidencias
} 