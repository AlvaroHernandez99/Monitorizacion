<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "interfaces/IToJson.php";
include_once "./models/Element.php";
include_once "Respuesta.php";

$conect = Conexion::conectar();

try{
    if($conect === null){
        echo Respuesta::mensaje(False, "No se ha conseguido establecer conexión con la db", null);
        die;
    }else{
        $miPdo = $conect->getPdo(); 
    }
}catch(Exception $e){
    return null;
}

$name = $_POST["nombre"] ?? "Patata";
$description = $_POST["desc"] ?? "Gaming";
$serialNumber = $_POST["numSer"] ?? "1234";
$condition =  $_POST["estado"] ?? "Activo";
$priority =  $_POST["igual"] ?? "Alta";
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
echo Respuesta::mensaje(True, "Nuevo elemento creado en la bd", $comprobacionExistencia);

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



