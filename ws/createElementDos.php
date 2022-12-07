<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "interfaces/IToJson.php";
include_once "./models/Element.php";
include_once "Respuesta.php";

$conect = Conexion::conectar();

try{
    if($conect === null){
        echo Respuesta::mensaje(false, "No se ha conseguido establecer conexión con la db", null);
        die;
    }else{
        $miPdo = $conect->getPdo(); 
    }
}catch(Exception $e){
    return null;
}

$name = $_POST["nombre"];
if (!empty($_POST['nombre'])) $name = $_POST['nombre'];
else $name = 'No especificado';

$description = $_POST["desc"];
if (!empty($_POST['desc'])) $description = $_POST['desc'];
else $description = 'No especificado';

$serialNumber = $_POST["numSer"] ?? "1234";
if (!empty($_POST['numSer'])) $serialNumber = $_POST['numSer'];
else $serialNumber = 'No especificado';

$condition =  $_POST["estado"];
if (!empty($_POST['estado'])) $condition = $_POST['estado'];
else $condition = 'No seleccionado';

$priority =  $_POST["igual"] ?? "No seleccionado";
switch ($priority) {
    case "Bajo":
        $priority = "Baja";
    break;
    case "Media":
        $priority = "Media";
    break;
    case "Alta":
        $priority = "Alta";
    break;
}

$consultaInsertar = ("INSERT INTO elementos (nombre, descripcion, nserie, estado, prioridad) VALUES
                    (:nombre, :desc, :numSer, :estado, :igual)");
$comprobacionExistencia = insertarElemento($miPdo, $consultaInsertar, $name, $description, $serialNumber, $condition, $priority);
echo Respuesta::mensaje(true, "Nuevo elemento creado en la bd", $comprobacionExistencia);

function insertarElemento($pdo, $consultaInsertar, $name, $description, $serialNumber, $condition, $priority){
    try{
        $consultaAEjecutar = $pdo->prepare($consultaInsertar);
        $consultaAEjecutar->bindParam(':nombre', $name, PDO::PARAM_STR);
        $consultaAEjecutar->bindParam(':desc', $description, PDO::PARAM_STR);
        $consultaAEjecutar->bindParam(':numSer', $serialNumber, PDO::PARAM_STR);
        $consultaAEjecutar->bindParam(':estado', $condition, PDO::PARAM_STR);
        $consultaAEjecutar->bindParam(':igual', $priority, PDO::PARAM_STR);  
        $consultaAEjecutar->execute();

        $lastInsertId = $pdo->lastInsertId();
        $consultaAEjecutar = $pdo->query("SELECT * FROM elementos WHERE id = $lastInsertId");
        $resultados = $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        if (!empty($resultados)){
            return $resultados;
        }
    }catch (PDOException $e){
        return null; 
    }
}
?>



