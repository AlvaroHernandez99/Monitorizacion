<?php

require_once( "./interfaces/IToJson.php");
require_once ("./models/Element.php");


if($_POST){
    $name = "";
    $description = "";
    $serialNumber = "";
    $condition = "";
    $priority = "";

    if(isset($_POST["nombre"])){    //isset() -> comprueba que una variable esté definida y no sea null
        $name = $_POST["nombre"];
    }

    if(isset($_POST["desc"])){
        $description = $_POST["desc"];
    }

    if(isset($_POST["numSer"])){
        $serialNumber = $_POST["numSer"];
    }

    if(isset($_POST["estado"])){
        $condition = $_POST["estado"];
    }

    if(isset($_POST["igual"])){
        $priority = $_POST["igual"];
    } 



    
}

//Instacia elemento y lo rellenaremos con los datos del formulario.
$elementOne = new Element($name, $description, $serialNumber, $condition, $priority);
$elementOne->toJson();
?>