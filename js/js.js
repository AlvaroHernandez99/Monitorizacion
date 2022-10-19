window.onload = function (){
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos =
[   {"nombre":"Termómetro","descripcion":"Medidor temperatura","numero de serie":"2342342","estado":"activo","prioridad":"media"}, 
    {"nombre":"Sensor Proximidad","descripcion":"cuando se acerca alguien pita","numero de serie":"334334","estado":"activo","prioridad":"alta"},
    {"nombre":"Sensor lumínico","descripcion":"cuando se hace sol se apaga","numero de serie":"5464564","estado":"inactivo","prioridad":"baja"}
];


function insertarFila(){
    //Enseña los datos que le paso
    for (let index = 0; index < elementos.length; index++) {
        const element = elementos[index];
        //console.log(element.nombre);
        //seleccionamos la tabla
        const cuerpoTabla = document.querySelector("tbody");
        //creamos tr y lo metemos dentro de la tabla
        const cuerpoTr = document.createElement("tr");
        //
        //Poner en td y tr nombre y desc
        cuerpoTr.setAttribute("class", "a");
        //
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
    }
}


document.getElementById("buscador").addEventListener("keyup", filtrarResult);

function filtrarResult(){
    //selecciono la clase a (los tr)
    const a = document.querySelector(".a");
    
    //ME recoge lo que le paso al input
    document.addEventListener("keyup", e =>{
        //console.log(e.target.value); -> Saca por consola lo que le meto
        document.querySelectorAll('.a').forEach(datos =>{
            //poner objeto en minúscula y comparar con lo que le meton en el input
            datos.textContent.toLowerCase().includes(e.target.value)
            //if
            ? datos.classList.remove('filtro')
            //else
            : datos.classList.add('filtro'); 
        })
    })

}

