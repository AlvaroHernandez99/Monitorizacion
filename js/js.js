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

            cuerpoTr.setAttribute("class", "a");
            cuerpoTr.setAttribute("id", data.data[index].id);
            //cuerpoTr.setAttribute("id", data.data[index].id);

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
            button.setAttribute("id", data.data[index].id);
            button.setAttribute("class", "buttonId");
            //console.log(button.id);

            //BOTON GUARDAR
            const botonSave = document.createElement('button');
            cuerpoTr.appendChild(x);
            x.appendChild(botonSave);
            /* botonSave.textContent = "guardar";
            botonSave.setAttribute("class", "botonSave");*/
            botonSave.setAttribute("id", data.data[index].id);
            botonSave.style.display = "none";

            button.onclick = borrarFila;
            botonG.onclick = cambiarInput;

            //creamos td y lo metemos dentro del tr (nombre)
            const cuerpoTd = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTd);
            cuerpoTd.innerHTML = data.data[index].nombre;
            cuerpoTd.setAttribute("class", "names");
            cuerpoTd.setAttribute("id", "nombre");
            //Desc
            const cuerpoTdDesc = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdDesc);
            cuerpoTdDesc.textContent = data.data[index].descripcion;
            cuerpoTdDesc.setAttribute("class", "descs");
            cuerpoTd.setAttribute("id", "desc");

            //NumSer
            const cuerpoTdNum = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdNum);
            cuerpoTdNum.textContent = data.data[index].nserie;
            cuerpoTd.setAttribute("id", "numSer");

            //estado
            const cuerpoTdEst = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdEst);
            cuerpoTdEst.textContent = data.data[index].estado;
            cuerpoTd.setAttribute("id", "estado");

            //prioridad
            const cuerpoTdPrio = document.createElement("td");
            cuerpoTr.appendChild(cuerpoTdPrio);
            cuerpoTdPrio.textContent = data.data[index].prioridad;
            cuerpoTd.setAttribute("id", "igual");
        }
    })
}

async function borrarFila(id) {
    //seleccionar fila
    let fila = this.parentNode.parentNode;
    id = fila.id;
    console.log(fila);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: '¿Estas seguro?',
        text: "¿Quieres borrar el elmento?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Borrado!',
                'El elemento ha sido borrado',
                'success'
            )
            fetch(`./ws/deleteElement.php?id=${id}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fila.remove();
            })
        }  else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                ':)',
                'error'
            )
        } 
    })
}

// ARREGLAR PARA QUE NO SE REFESQUE POR DEFECTO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function createElementDos() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: '¿Quieres crear un nuevo elemento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Crear!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Creado!',
                'El elemento ha sido creado correctamente',
                'success'
            )
            fetch("./ws/createElementDos.php/", {
                method: 'POST',
                body: new FormData(formularioGrid)
            }).then(response => response.json()).then(data => {
                console.log(data);
            })
        }  else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                ':)',
                'error'
            )
        } 
    })   
}

function cambiarInput() {
    //selecciono el id
    let fila = this.parentNode.parentNode;
    //console.log(fila);
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
        /* CAPTURO LOS VALORES DE LOS INPUTS */
        nombreInp = fila.cells[1].innerHTML;
        //console.log(nombreInp);

        descInp = fila.cells[2].innerHTML;
        //console.log(descInp);

        numSerInp = fila.cells[3].innerHTML;
        //console.log(numSerInp);

        estadoInp = fila.cells[4].innerHTML;
        //console.log(estadoInp);

        igualInp = fila.cells[5].innerHTML;
        //console.log(igualInp); 

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: '¿Quieres guardar los datos el elemento?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Guardar datos!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha editado corractamente!',
                    'Datos actualizados',
                    'success'
                )
                let id = fila.id;
    ///////////////////////////////////////////////////////////////////////////
                


// Me falta decirle que el nombre será la tabla de la db... hay que hacer con un for que recorra la db?¿?¿?¿?¿??¿?¿
                /* let datos = {
                    nombre: nombreInp,
                    descripcion: descInp,
                    nserie: numSerInp,
                    estado:estadoInp,
                    prioridad: igualInp
                }   */
                /* console.log(nombre);
                console.log(descripcion);
                console.log(nserie);
                console.log(estado);
                console.log(prioridad); */
                
                let formdata = new FormData();

                formdata.append('nombre', nombreInp);
                formdata.append('desc', descInp);
                formdata.append('numSer', numSerInp);
                formdata.append('estado', estadoInp);
                formdata.append('igual',igualInp);
                
                console.log(formdata);
                fetch(`./ws/modifyElements.php?id=${id}`, {
                    method: 'POST',

    /* ARREGLAR LO QUE PASO... NO ME COGE EL VALOR DE LOS IMPUTS */
                    //headers: {"Content-type": "application/json; charset=UTF-8"},
                    body: formdata,
                })
                .then(response => response.json())
                .then(data => {
                    /* El valor del imput e lo recoge bien... */
                    /* Este nombre tiene que ser el de la tabla de la DB */ // ----- ARREGLAR
                    /* console.log(nombreInp);*/
                    console.log(data); 



                    
                })




   ///////////////////////////////////////////////////////////////////////////

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    ':)',
                    'error'
                )
            } 
        })


 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        const botonX = document.getElementById('botonX');
        const botonEdit = document.getElementById('botonEdit');
        
        botonX.onclick = () => {
            let id = fila.id;
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: '¿Estas seguro?',
                text: "¿Quieres borrar el elmento?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Borrar!',
                cancelButtonText: 'Cancelar!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Borrado!',
                        'El elemento ha sido borrado',
                        'success'
                    )
                    fetch(`./ws/deleteElement.php?id=${id}`, {
                        method: 'DELETE',
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        fila.remove();
                        //alertDelete();
                    })
                }  else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        ':)',
                        'error'
                    )
                } 
            })
            
        };
        botonEdit.onclick = cambiarInput;
    })
}







/* buscador jodido */
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

//LISTA DE ID
/* async function traeDatos() {
    fetch('./ws/getElement.php', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.data.length; i++) {
                console.log(data.data[i].id);
            }
        })
} */