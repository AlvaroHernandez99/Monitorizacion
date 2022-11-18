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
        "descripcion": "cuando se acerca alguien pita",
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
        botonG.setAttribute("id", "celda"+index);

        /* botonG.onclick = generarForm;  */
        botonG.onclick = cambiarInput; 
        button.onclick = borrarFila;

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
 
function cambiarInput(){
    //selecciono el id
    let fila = this.parentNode.parentNode;
    //console.log(fila);
    //recorrer filas, i = 1 para que me ignore el boton
    for (let i=1; i<fila.cells.length; i++) {
        //console.log(celda.innerHTML);
        //pasar de td a input
        let datos = fila.cells[i].innerHTML;
        let input = document.createElement('input');
        fila.cells[i].appendChild(input);
        input.value = datos;
    }
    
}



 //1. CUANDO LE DE AL BOTON DE EDIT, QUE ME LO BORRE Y ME CREE UNO DE GUARDAR

 //2. CUANDO LE DE A ESE BOTON DE GUARDAR, QUE ME CAMBIE EL VALOR QUE HABÍAN ANTES POR LE VALOR DE LOS INPUTS

 //3. QUE ME AÑADA TODOS LOS CAMBIAOS A UN ARRAY PARA PODER TRABAJAR CON ELLOS
























































 

/*  
function editTable(){
    const fila0 = document.querySelector('#fila0');
    const fila1 = document.querySelector('#fila1');
    const fila2 = document.querySelector('#fila2');
     
    //Seleccionar contenido TD ---> HACER QUE ME LO CAMBIE
    document.getElementById("tablaElemento").addEventListener("click", function (e) {
        let valorTd = e.srcElement.innerHTML;
        
        console.log(valorTd);
    });
}
*/

/* function generarForm(){

    ////Crear el objeto formulario
    let formulario=document.createElement("form");
    ////Crear el objeto label de titulo
    let titulo=document.createElement("label");
    ////Crear el objeto caja de texto Nombres
    let cajaTextNombres=document.createElement("input");
    ////Crear el objeto caja de texto Apellidos
    let cajaTextDescripcion=document.createElement("input");
    ////Crear el objeto caja de texto Email
    let cajaTextNSerie=document.createElement("input");
    ////Crear el objeto caja de texto Asunto del Mensaje
    let cajaTextEstado=document.createElement("input");
    ////Crear el objeto caja de texto Asunto del Mensaje
    let cajaTextPrioridad=document.createElement("input");
    ////Crear el objeto boton
    let boton=document.createElement("input");

    ////Asignar atributos al objeto formulario
    formulario.setAttribute('method', "");//Asignar el atributo method
    formulario.setAttribute('action', "");//Asignar el atributo action
    //formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

    ////Asignar atributos al objeto caja de texto de Nombres
    cajaTextNombres.setAttribute('type', "text");//Asignar el atributo type
    //cajaTextNombres.setAttribute('placeholder', "Nombres");//Asignar el atributo placeholder
    cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto caja de texto de Apellidos
    cajaTextDescripcion.setAttribute('type', "text");//Asignar el atributo type
    //cajaTextDescripcion.setAttribute('placeholder', "Descripción ");//Asignar el atributo placeholder
    cajaTextDescripcion.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto caja de texto de Email
    cajaTextNSerie.setAttribute('type', "text");//Asignar el atributo type
    //cajaTextNSerie.setAttribute('placeholder', "Número de serie");//Asignar el atributo placeholder
    cajaTextNSerie.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto caja de texto de Asunto
    cajaTextEstado.setAttribute('type', "text");//Asignar el atributo type
    //cajaTextEstado.setAttribute('placeholder', "Estado");//Asignar el atributo placeholder
    cajaTextEstado.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto caja de texto de Asunto
    cajaTextPrioridad.setAttribute('type', "text");//Asignar el atributo type
    //cajaTextPrioridad.setAttribute('placeholder', "Prioridad");//Asignar el atributo placeholder
    cajaTextPrioridad.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto boton
    boton.setAttribute('type', "button");//Asignar el atributo type	
    boton.setAttribute('value', "Guardar");//Asignar el atributo value
    boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
    //boton.setAttribute('onclick', "alert('DATOS GUARADADOS')");//Asignar el metodo onclick
               
    
                    
    // CUANDO LE DE A GUARDAR DATOS QUE ME ESCONDA EL FORMULARIO 
    //boton.setAttribute('onclick', "formulario.style.display='none'");//Asignar el metodo onclick

    titulo.innerHTML='<h1>Editar elemento</h1>';//Asignar el texto de titulo en el objeto titulo
    formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
    formulario.appendChild(cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
    formulario.appendChild(cajaTextDescripcion);//Agregar el objeto caja de texto Apellidos al objeto formulario
    formulario.appendChild(cajaTextNSerie);//Agregar el objeto caja de texto Email al objeto formulario
    formulario.appendChild(cajaTextEstado);//Agregar el objeto caja de texto Asunto al objeto formulario
    formulario.appendChild(cajaTextPrioridad);//Agregar el objeto area de texto del Mensaje al objeto formulario
    formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
    document.getElementById('header').appendChild(formulario);//Agregar el formulario a la etiquete con el ID	
    
           
    
    //Añadir los datos a los campos
    for (const element of elementos) {

        console.log(element.nombre);

        cajaTextNombres.value = element.nombre;
        cajaTextDescripcion.value = element.descripcion;
        cajaTextNSerie.value = element["numero de serie"];
        cajaTextEstado.value = element.estado;
        cajaTextPrioridad.value = element.prioridad;


    }

   
}

 */







