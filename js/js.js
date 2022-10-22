window.onload = function (){
    insertarFila();
}
///////////////////////////////////////// METER ESTOS ELEMTOS EN LA TABLA PARA QUE SE QUEDEN PREDETERMINADOS ////////////////
//prueba array con elementos
const elementos =
[   {
        "nombre":"Termómetro",
        "descripcion":"Medidor temperatura",
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
        
        //console.log(element.nombre);       


        //creamos tr y lo metemos dentro de la tabla
        const cuerpoTr = document.createElement("tr");
        
        ////////////////////////////////////////////////////////////
        //Poner en y tr nombre y desc


        //cuerpoTr.setAttribute("id", index);

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
    nombresElementos = document.querySelectorAll(".names");
    descsElementos = document.querySelectorAll(".descs"); 
    
    console.log(nombresElementos);

    //selecciono la clase a (los tr)
    const a = document.querySelector(".a");
    
    //ME recoge lo que le paso al input
    document.addEventListener("keyup", e =>{
        //console.log(e.target.value); -> Saca por consola lo que le meto
        document.querySelectorAll('.a').forEach(datos =>{
            //BUSCA A PARTIR DE LA TERCERA --------------------------- PERO LUEGO NO VUELVE A HACER LA BUSQUEDA AL BORRAR
            buscadorInput = (e.target.value).toLowerCase();

            

            if (buscadorInput.length >= 3) {

                

                datos.textContent.toLowerCase().includes(buscadorInput)
                //if
                ? datos.classList.remove('filtro')
                //else
                : datos.classList.add('filtro'); 

                /* console.log(buscadorInput); */
/* 
                for (let i = 0; i < elementos.length; i++) {
                    console.log(elementos[i].nombre); 
                    const nombredesc = elementos.find(busq => busq.nombre == buscadorInput); 
                    console.log(nombredesc); 
                    elementNombre = elementos[i].nombre;

                    console.log(elementNombre);


                    if(buscadorInput == elementNombre){
                        console.log("encontrado");
                    }else{
                        console.log("moscas");
                    }

                } */
                
            
            
            



            
            /* 
            datos.textContent.toLowerCase().includes(buscadorInput)
             //if
            ? datos.classList.remove('filtro')
             //else
            : datos.classList.add('filtro'); 
            */
            


            
            }
        })
    })
}
//!!!!!!!!!!!!!!!!!!!!!!!!!

            //A través del DOM o a través del array de clases (nombre y desc), 
            //hacer la comparacion con el texto introducido
            













            // arreglar esta puta mierda --- PARA QUE ME BUSQUE SOLO CON NOMBRE O DESC
                /* if (elementos[1].nombre.toLocaleLowerCase == e.target.value.toLocaleLowerCase || elementos[1].descripcion.toLocaleLowerCase == e.target.value.toLocaleLowerCase) {
                    //poner objeto en minúscula y comparar con lo que le meto en el input
                    
                } */
