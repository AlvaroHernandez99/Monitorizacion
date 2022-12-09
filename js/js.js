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
    const alerta = Swal.mixin()
    alerta.fire({
        iconHtml: '<img src="./img/seguro.jpg">',
        showCancelButton: true,
        confirmButtonText: 'Borrar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            alerta.fire(
                '<img src="./img/perfect.jpg">'
            )
            fetch(`./ws/deleteElement.php?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    fila.remove();
                })
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            alerta.fire(
                '<img src="./img/gallina.jpg">',
            )
        }
    })
}

async function createElementDos() {
    let fom = document.querySelector("#formularioGrid");
    fom.addEventListener("submit", (form) => {
        form.preventDefault();
        //alerta customizada o cuando queremos crear alertas propias
        const alerta = Swal.mixin()
        alerta.fire({
            iconHtml: '<img src="./img/seguro.jpg">',
            showCancelButton: true,
            confirmButtonText: 'Crear!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                alerta.fire(
                    '<img src="./img/perfect.jpg">',
                )
                fetch("./ws/createElementDos.php/", {
                    method: 'POST',
                    body: new FormData(formularioGrid)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        resetGG();
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                alerta.fire(
                    '<img src="./img/gallina.jpg">'
                )
            }
        })
    })
}

function cambiarInput() {
    //selecciono el id
    let fila = this.parentNode.parentNode;
    //console.log(fila);
    for (let i = 0; i < fila.cells.length; i++) {
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
        descInp = fila.cells[2].innerHTML;
        numSerInp = fila.cells[3].innerHTML;
        estadoInp = fila.cells[4].innerHTML;
        igualInp = fila.cells[5].innerHTML;
        const alerta = Swal.mixin({
        })
        alerta.fire({
            iconHtml: '<img src="./img/seguro.jpg">',
            showCancelButton: true,
            confirmButtonText: 'Guardar datos!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                alerta.fire(
                    '<img src="./img/perfect.jpg">'
                )
                let id = fila.id;
                let formdata = new FormData();
                formdata.append('nombre', nombreInp);
                formdata.append('desc', descInp);
                formdata.append('numSer', numSerInp);
                formdata.append('estado', estadoInp);
                formdata.append('igual', igualInp);
                console.log(formdata);
                fetch(`./ws/modifyElements.php?id=${id}`, {
                    method: 'POST',
                    body: formdata,
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                alerta.fire(
                    '<img src="./img/gallina.jpg">',
                    resetGgDosT()
                )
            }
        })

        const botonX = document.getElementById('botonX');
        const botonEdit = document.getElementById('botonEdit');
        botonX.onclick = () => {
            let id = fila.id;
            const alerta = Swal.mixin({
            })
            alerta.fire({
                iconHtml: '<img src="./img/seguro.jpg">',
                showCancelButton: true,
                confirmButtonText: 'Borrar!',
                cancelButtonText: 'Cancelar!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    alerta.fire(
                        '<img src="./img/perfect.jpg">'
                    )
                    fetch(`./ws/deleteElement.php?id=${id}`, {
                        method: 'DELETE',
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            fila.remove();
                        })
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    alerta.fire(
                        '<img src="./img/gallina.jpg">',
                        resetGgDosT()
                    )
                }
            })
        };
        botonEdit.onclick = cambiarInput;
    })
}

function resetGG() {
    setTimeout(function () {
        window.location.reload();
    }, 2000);
}
function resetGgDos() {
    setTimeout(function () {
        window.location.reload();
    });
}
function resetGgDosT() {
    setTimeout(function () {
        window.location.reload();
    }, 1500);
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