<?php
require_once "./models/Element.php";

echo "name " . $_POST["nombre"] . "description " . $_POST["desc"] . "serialNumber" . $_POST["numSer"] . "condicion" . $_POST["prio"] . "prioridad" . $_POST['igual'];


// aqui tiene que ir to!







//Vacío ya que lo rellenaremos con los datos del formulario.
$elementoUno = new Element("nombre", "", "", "", "");


?>