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
    //Enseña los datos que le paso
    for (let index = 0; index < elementos.length; index++) {
        const element = elementos[index];
        //console.log(element.nombre);
        //seleccionamos la tabla
        const cuerpoTabla = document.querySelector("tbody");
        //creamos tr y lo metemos dentro de la tabla
        const cuerpoTr = document.createElement("tr");
        cuerpoTabla.appendChild(cuerpoTr);

        //X
        const x = document.createElement("td");
        const button = document.createElement("button");
        cuerpoTr.appendChild(x);
        x.appendChild(button);
        button.textContent = "X";

        button.onclick = borrarFila;
        /* button.addEventListener(click, borrarFila()); */

        //creamos td y lo metemos dentro del tr (nombre)
        const cuerpoTd = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTd);
        cuerpoTd.textContent = element.nombre;
        //Desc
        const cuerpoTdDesc = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTdDesc);
        cuerpoTdDesc.textContent = element.descripcion;
        //NumSer
        const cuerpoTdNum = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTdNum);
        cuerpoTdNum.textContent = element["numero de serie"];
        //estado
        const cuerpoTdEst = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTdEst);
        cuerpoTdEst.textContent = element.estado;
        //prioridad
        const cuerpoTdPrio = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTdPrio);
        cuerpoTdPrio.textContent = element.prioridad;

        // PARA BORRAR FILAS
        function borrarFila(){
            let fila = cuerpoTabla.removeChild(cuerpoTr);
            /* document.fila.parentElement.remove(); */
            fila.remove();
        } 

    }//NO HACEN NADA
     // HACEN LO MISMO ;(((((((((((((
    for (const key in elementos) {
        if (Object.hasOwnProperty.call(elementos, key)) {
            const element = elementos[key].nombre;
            //console.log(element);
        }
    }
    // Enseña el dato que le pongas de cada elemento
    for (let index = 0; index < elementos.length; index++) {
        //objetos = elementos[index];
        //console.log(elementos[index].descripcion);
    } 
}
























function filtrarResult(){
    //buscar por nonmbre || descripcion
    //empiece a buscar a partir del 3º carácter
    //Resaltar resultados de la búsqueda con css ó dejar solo los resultados en la tabla
    //Puede haber varias coincidencias
} 