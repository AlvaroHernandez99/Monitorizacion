window.onload = function (){
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos =
[   {
        "nombre":"Termómetro",
        "descripcion":"Mide la temperatura",
        "numero de serie":"2342342",
        "estado":"activo",
        "prioridad":"media"
    }, 
    {
        "nombre":"Sensor Proximidad",
        "descripcion":"cuando se acerca alguien pita",
        "numero de serie":"334334",
        "estado":"activo",
        "prioridad":"alta"},
    {
        "nombre":"Sensor lumínico",
        "descripcion":"cuando se hace sol se apaga",
        "numero de serie":"5464564",
        "estado":"inactivo",
        "prioridad":"baja"
    }
];


function insertarFila(){
    //Enseña los datos que le paso
    for (let index = 0; index < elementos.length; index++) {

        //Nuestro tbody vacio
        let tbody=document.querySelector("#nuestrasFilas");
        const element = elementos[index];

        //creamos tr y lo metemos dentro de la tabla
        const cuerpoTr = document.createElement("tr");
        
        ////////////////////////////////////////////////////////////
        cuerpoTr.setAttribute("class", "a");
        //
        tbody.appendChild(cuerpoTr);

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
        cuerpoTd.setAttribute("class", "names");
        //Desc
        const cuerpoTdDesc = document.createElement("td");
        cuerpoTr.appendChild(cuerpoTdDesc);
        cuerpoTdDesc.textContent = element.descripcion;
        cuerpoTdDesc.setAttribute("class", "descs");
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
            let fila = tbody.removeChild(cuerpoTr);
            /* document.fila.parentElement.remove(); */
            fila.remove();
        } 
    }
}

document.getElementById("buscador").addEventListener("keyup", filtrarResult);

function filtrarResult(){

    //Array con el NodeList de los 3 nombres
    nombresElementos = document.querySelectorAll(".names");
    //console.log(nombresElementos);

    //Array con el NodeList de las 3 desc
    descsElementos = document.querySelectorAll(".descs"); 
    //console.log(descsElementos);
    
    //selecciono la clase a (los tr)
    const claseA = document.querySelectorAll(".a");
    //console.log(claseA);

    //ME recoge lo que le paso al input por cada letra que le paso
    document.addEventListener("keyup", e =>{
        //console.log(e.target.value); -> Saca por consola lo que le meto al imput
        claseA.forEach(datos =>{
            buscadorInput = (e.target.value).toLowerCase();
            //BUSCA A PARTIR DE LA TERCERA 
            if (buscadorInput.length >= 3) {

                for (let i = 0; i < elementos.length; i++) {
                    
                    if(elementos[i].nombre.toLocaleLowerCase().includes(buscadorInput) || elementos[i].descripcion.toLocaleLowerCase().includes(buscadorInput) ){
                        //console.log(elementos[i].nombre);
                        //console.log(elementos[i].descripcion);
                        datos.textContent.toLowerCase().includes(buscadorInput)
                        //if
                        ? datos.classList.remove('filtro')
                        //else
                        : datos.classList.add('filtro'); 
                        console.log("Elemento encontrado");
                    }else{
                        console.log("Elemento no encontrado");
                    }
                } 
            }
        })
    })
}

