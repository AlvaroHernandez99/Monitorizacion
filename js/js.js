
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS
//prueba array con elementos
const elementos = {"elementos":
[   {"nombre":"Termómetro","descripcion":"Medidor temperatura","numero de serie":"2342342","estado":"activo","prioridad":"media"}, 
    {"nombre":"Sensor Proximidad","descripcion":"cuando se acerca alguien pita","numero de serie":"334334","estado":"activo","prioridad":"alta"},
    {"nombre":"Sensor lumínico","descripcion":"cuando se hace sol se apaga","numero de serie":"5464564","estado":"inactivo","prioridad":"baja"}
]}

// mostrar json en tabla html js

/////////////////////// PONER DATOS EN LA TABLA CON  ?¿?¿?¿??¿?¿ WINDOW.ONLOAD¿??¿?¿?¿?¿?¿? (PARA QUE PRECARGUE LOS DATOS)

const elementNombre = JSON.stringify(elementos.elementos[0].nombre);

const cajaNombre = document.querySelector("#f1nombre");


//cajaNombre.document.write(elementNombre).name;


//cajaNombre.innerHTML = '#f1nombre';
//window.onload(cajaNombre = elementNombre);


const elementOneNombre = JSON.stringify(elementos.elementos[1].nombre);
console.log(elementOneNombre);




function recarga(){
    document.body.onload = function() {
        alert('La página terminó de cargar');
    }
}






function borrarFila(fila){
    //seleccionamos la tabla
    tabla = document.querySelector("#tablaElemento");
    // Le pasamos el rowIndex (es el indice para que sepa que fila borrar)
    var rowIndex = fila.parentNode.parentNode.rowIndex;
    document.querySelector("#tablaElemento").deleteRow(rowIndex);
}




function eliminarFila(){
    //los datos tienen que estar preecargados de los datos de la constante
    //al darle a la X, que elimine la fila entera

}

function filtrarResult(){
    //buscar por nonmbre || descripcion
    //empiece a buscar a partir del 3º carácter
    //Resaltar resultados de la búsqueda con css ó dejar solo los resultados en la tabla
    //Puede haber varias coincidencias
}