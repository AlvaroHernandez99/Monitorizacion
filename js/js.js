//Funcion que se ejecuta justo al abrir la ventana.
window.onload = () => {
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos =
    [{
        "nombre": "Termómetro",
        "descripcion": "Mide la temperatura",
        "numero de serie": "2342342",
        "estado": "activo",
        "prioridad": "media"
    },
    {
        "nombre": "Sensor Proximidad",
        "descripcion": "si se acerca alguien pita",
        "numero de serie": "334334",
        "estado": "activo",
        "prioridad": "alta"
    },
    {
        "nombre": "Sensor lumínico",
        "descripcion": "cuando hace sol se apaga",
        "numero de serie": "5464564",
        "estado": "inactivo",
        "prioridad": "baja"
    }
    ];


function insertarFila() {
    //Recorre los objetos 
    for (let index = 0; index < elementos.length; index++) {
        //Seleccionamos el tbdoy que es donde vamos a insertar las filas
        let tbody = document.querySelector("#nuestrasFilas");
        const element = elementos[index];

        //creamos tr y lo metemos dentro de la tabla
        const cuerpoTr = document.createElement("tr");

        ////////////////////////////////////////////////////////////
        // A cada elementos del tr le damos la clase a, para posteriormente trabajar con ella
        cuerpoTr.setAttribute("class", "a");
        cuerpoTr.setAttribute("id", "fila" + index);
        //cuerpoTr.setAttribute("onclick", "generarForm(this);");
        //
        tbody.appendChild(cuerpoTr);

        //X
        const x = document.createElement("td");
        const button = document.createElement("button");
        const botonG = document.createElement("button");


        cuerpoTr.appendChild(x);
        x.appendChild(button);
        x.appendChild(botonG);


        button.textContent = "X";
        botonG.textContent = "edit";
        /* button.setAttribute("id", index); */
        botonG.setAttribute("id", "a" + index);
        botonG.setAttribute("class", "botonEdit");


        //BOTON GUARDAR
        let botonSave = document.createElement('button');
        cuerpoTr.appendChild(x);
        x.appendChild(botonSave);
        botonSave.textContent = "guardar";
        botonSave.setAttribute("class", "botonSave");
        botonSave.setAttribute("id", "b" + index);
        botonSave.style.display = "none";



        /* botonG.onclick = generarForm;  */

        button.onclick = borrarFila;
        botonG.onclick = cambiarInput;


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
        function borrarFila() {
            tbody.removeChild(cuerpoTr);
        }
    }



    function cambiarInput() {
        //selecciono el id
        let fila = this.parentNode.parentNode;
        //console.log(fila);
        //recorrer filas, i = 1 para que me ignore el boton
        for (let i = 0; i < fila.cells.length; i++) {
            //console.log(celda.innerHTML);
            //pasar de td a input
            let datos = fila.cells[i].innerHTML;
            let input = document.createElement('input');
            if (i === 0) {
                fila.cells[i].innerHTML = "<button id='botonSave'>save</button>";
            } else {
                fila.cells[i].appendChild(input);
                input.id = i;
            }
            input.value = datos;
        }
        let botonSave = document.querySelector("#botonSave");
        botonSave.addEventListener("click", () => {
            for (let i = 0; i < fila.cells.length; i++) {
                if (i === 0) {
                    fila.cells[i].innerHTML = "<button id='botonX'>X</button><button id='botonEdit'>Edit</button>";
                } else {
                    let input = document.getElementById(i);
                    fila.cells[i].innerHTML = input.value;
                }
            }
            const botonX = document.getElementById('botonX');
            const botonEdit = document.getElementById('botonEdit');
            botonX.onclick = () => {
                fila.remove();
            };
            botonEdit.onclick = cambiarInput;
        })
    }
}

document.getElementById("buscador").addEventListener("keyup", filtrarResult);

function filtrarResult() {
    //selecciono la clase a (los tr), que es donde va a buscar todos los datos que le vamos pansando
    const claseA = document.querySelectorAll(".a");

    //ME recoge lo que le paso al input por cada letra que le paso
    document.addEventListener("keyup", e => {
        //console.log(e.target.value); -> Saca por consola lo que le meto al input
        claseA.forEach(datos => {
            buscadorInput = (e.target.value).toLowerCase();
            //BUSCA A PARTIR DE LA TERCERA 
            if (buscadorInput.length >= 3) {
                for (let i = 0; i < elementos.length; i++) {
                    //Con la función includes comprobamos si una cadena está dentro de otra, con eso hacemos la comparación
                    if (elementos[i].nombre.toLowerCase().includes(buscadorInput) || elementos[i].descripcion.toLowerCase().includes(buscadorInput)) {
                        datos.textContent.toLowerCase().includes(buscadorInput)
                            //if
                            ? datos.classList.remove('filtro')
                            //else  --> Se añade el filtro para esconder los resultados no buscados
                            : datos.classList.add('filtro');
                        console.log("Elemento encontrado");
                    }
                }
            } else if (buscadorInput.length == 0) {
                //console.log("vacio");
                datos.classList.remove('filtro');
            }
        })
    })
}


 //3. QUE ME AÑADA TODOS LOS CAMBIAOS A UN ARRAY PARA PODER TRABAJAR CON él
 
 //EN EL FOR SABER QUENUMERO DEL ARRAY TENGO, SI TENGO UNA FILA 0, LA POSICION DE LA FILA TIENE QUE SER LA 0






