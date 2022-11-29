window.onload = () => {
    insertarFila();
}


async function insertarFila() {

    fetch('./ws/getElement.php', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {

         //Recorre los objetos 
        for (let index = 0; index < data.data.length; index++) {
            //Seleccionamos el tbdoy que es donde vamos a insertar las filas
            let tbody = document.querySelector("#nuestrasFilas");
            

            //creamos tr y lo metemos dentro de la tabla
            const cuerpoTr = document.createElement("tr");

            ////////////////////////////////////////////////////////////

            cuerpoTr.setAttribute("class", "a");
            cuerpoTr.setAttribute("id","fila"+index);
    
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

            button.setAttribute("onclick", "borrarFila(this)");

            //BOTON GUARDAR
            const botonSave = document.createElement('button');
            cuerpoTr.appendChild(x);
            x.appendChild(botonSave);
            botonSave.textContent = "guardar";
            botonSave.setAttribute("class", "botonSave");
            botonSave.setAttribute("id", "b" + index);
            botonSave.style.display = "none";

            button.onclick = borrarFila;
            botonG.onclick = cambiarInput;

            
            //creamos td y lo metemos dentro del tr (nombre)
            const cuerpoTd = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTd);
            cuerpoTd.innerHTML = data.data[index].nombre;
            cuerpoTd.setAttribute("class", "names");
            //Desc
            const cuerpoTdDesc = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdDesc);
            cuerpoTdDesc.textContent = data.data[index].descripcion;
            cuerpoTdDesc.setAttribute("class", "descs");
            //NumSer
            const cuerpoTdNum = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdNum);
            cuerpoTdNum.textContent = data.data[index].nserie;
            //estado
            const cuerpoTdEst = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdEst);
            cuerpoTdEst.textContent = data.data[index].estado;
            //prioridad
            const cuerpoTdPrio = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdPrio);
            cuerpoTdPrio.textContent = data.data[index].prioridad;
            
        }
    })
}

//////////////////////////////////////////////////////////////////////////////////




async function borrarFila() {
    let fila = this.parentNode.parentNode;

    fetch('./ws/deleteElement.php', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        fila.remove();








        console.log(data);
    })

    


}


function insertData(){
    
}

//////////////////////////////////////////////////////////////////////////////////






//document.getElementById("buscador").addEventListener("keyup", filtrar);
/* function filtrarResult() {
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
                        //console.log("Elemento encontrado");
                    }
                }
            } else if (buscadorInput.length == 0) {
                //console.log("vacio");
                datos.classList.remove('filtro');
            }
        })
    })
} */

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
                fila.cells[i].innerHTML = "<button id='botonX'>X</button><button id='botonEdit'>edit</button>";
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



