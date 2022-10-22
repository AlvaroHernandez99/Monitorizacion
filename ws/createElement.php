<?php

require_once( "./interfaces/IToJson.php");
require_once ("./models/Element.php");



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
$elementOne->toJson();
?>