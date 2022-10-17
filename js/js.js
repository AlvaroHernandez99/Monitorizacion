window.onload = function (){
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos =
[   {"nombre":"Termómetro","descripcion":"Medidor temperatura","numero de serie":"2342342","estado":"activo","prioridad":"media"}, 
    {"nombre":"Sensor Proximidad","descripcion":"cuando se acerca alguien pita","numero de serie":"334334","estado":"activo","prioridad":"alta"},
    {"nombre":"Sensor lumínico","descripcion":"cuando se hace sol se apaga","numero de serie":"5464564","estado":"inactivo","prioridad":"baja"}
]


function insertarFila(){

    //seleccionamos la tabla
    const cuerpoTabla = document.querySelector("tbody");
    //creamos tr y lo metemos dentro de la tabla
    const cuerpoTr = document.createElement("tr");
    cuerpoTabla.appendChild(cuerpoTr);
    //creamos td y lo metemos dentro del tr
    const cuerpoTd = document.createElement("td");
    cuerpoTr.appendChild(cuerpoTd);
    //cuerpoTd.textContent = "PRUEBA";

    //////////////////       //////////////////////////////////////


    //Ensela los objetos
    for (let index = 0; index < elementos.length; index++) {
        const element = elementos[index];
        console.log(element);
        cuerpoTd.textContent = element.nombre;
        
    }



    // HACEN LO MISMO ;(((((((((((((
        for (const key in elementos) {
            if (Object.hasOwnProperty.call(elementos, key)) {
                const element = elementos[key].nombre;
                console.log(element);
            }
        }
    // Enseña el dato que le pongas de cada elemento
    for (let index = 0; index < elementos.length; index++) {
        //objetos = elementos[index];
        console.log(elementos[index].descripcion);
        
    } 







}









    /* // EJEMPLO PARA CREAR ELEMENTO, METERLO DENTRO DIBUJARLO EN LA TABLA, HACERLO EN MODO BUCLE

let numSerOneTr = document.createElement("tr");
let numSerOneTd = document.createElement("td");
numSerOneTd.innerHTML = elementos.elementos[0]["numero de serie"];
numSerOneTr.appendChild(numSerOneTd);
tabla.appendChild(numSerOneTd); */

















/* function borrarFila(tabla){
    //seleccionamos la tabla
    tabla = document.querySelector("#tablaElemento");
    // Le pasamos el rowIndex (es el indice para que sepa que fila borrar)

    const rowIndex = tabla.parentNode.rowIndex;

    document.querySelector("#tablaElemento").deleteRow(rowIndex);
} */


function filtrarResult(){
    //buscar por nonmbre || descripcion
    //empiece a buscar a partir del 3º carácter
    //Resaltar resultados de la búsqueda con css ó dejar solo los resultados en la tabla
    //Puede haber varias coincidencias
} 