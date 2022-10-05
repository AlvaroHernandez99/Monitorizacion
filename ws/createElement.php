<?php
//echo "Los datos introducidos en el formulario son: name " . $_POST["nombre"] . ", description " . $_POST["desc"] . ", serialNumber " . $_POST["numSer"] . ", condicion " . $_POST["prio"] . "prioridad " . $_POST['igual'];

if($_POST){
    $name = "";
    $description = "";
    $serialNumber = "";
    $condition = "";
    $priority = "";

    if(isset($_POST["nombre"])){    //isset() -> comprueba que una variable esté definida y no sea null
        $name = $_POST["nombre"];
        //echo "Nombre guardado: " . $_POST["nombre"] . "</br>"; 
    }

    if(isset($_POST["desc"])){
        $description = $_POST["desc"];
        //echo "Descripción guardada: " . $_POST["desc"] . "</br>";
    }

    if(isset($_POST["numSer"])){
        $serialNumber = $_POST["numSer"];
        //echo "Número de serie guardado: " . $_POST["numSer"] . "</br>";
    }

    if(isset($_POST["estado"])){
        $condition = $_POST["estado"];
        //echo "Estado guardada: " . $_POST["estado"] . "</br>";
    }

    if(isset($_POST["igual"])){
        $priority = $_POST["igual"];
        //echo "Prioridad guardada: " . $_POST["igual"] . "</br>";
    } 

    if($writeDB = fopen("./DB.txt", "a")){ // "a", append -> para que no sobreescriba
        fwrite($writeDB, "Nombre: " . $name . " ,");
        fwrite($writeDB, "Descripcion: " . $description . " ,");
        fwrite($writeDB, "Número de serie " . $serialNumber . " ,");
        fwrite($writeDB, "Estado " . $condition . " ,");
        fwrite($writeDB, "Prioridad " . $priority . " . \n");
    }
    fclose($writeDB);
}

//Instacia elemento y lo rellenaremos con los datos del formulario.
?>