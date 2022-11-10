<?php

include_once ("interfaces/IToJson.php");
include_once ("models/Element.php");



$name = "";
$description = "";
$serialNumber = "";
$condition = "";
$priority = "";

$name = $_POST["nombre"] ?? null;
$description = $_POST["desc"] ?? null;
$serialNumber = $_POST["numSer"] ?? null;
$condition = $_POST["estado"] ?? null;
$priority = $_POST["igual"] ?? null;



//Instacia elemento y lo rellenaremos con los datos del formulario.
$elementOne = new Element($name, $description, $serialNumber, $condition, $priority);
///////////////////
$contenido = file_get_contents(('DB.txt'));

$arr = json_decode($contenido, true) ?? [];
$arr[] = json_decode($elementOne -> toJson());

file_put_contents('DB.txt', json_encode($arr, JSON_PRETTY_PRINT));
///////////////////
//hacer un echo de esto para que lo muestre por pantalla -----> borrar el echo del ELEMENT.php
echo $elementOne->toJson();
?>