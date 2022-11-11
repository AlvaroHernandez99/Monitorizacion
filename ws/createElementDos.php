<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "interfaces/IToJson.php";
include_once "./models/Element.php";
include_once "Respuesta.php";

//hacemos su conexion y le asignamos un nombre al pdo
$conect = Conexion::conectar();
$miPdo = $conect->getPdo();

//LOS DEJO POR DEFECTO O LO PONGO A NULL??   <-----------------------------
$name = $_POST["nombre"] ?? "PC";
$description = $_POST["desc"] ?? "GAMING";
$serialNumber = $_POST["numSer"] ?? "1234";
$condition =  $_POST["estado"] ?? "ActivoPAPI";
$priority =  $_POST["igual"] ?? "Baja";
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


// CONSULTA PREPARADA
$consultaInsertar = ("INSERT INTO elementos (nombre, descripcion, nserie, estado, prioridad) VALUES
                    (:nombre, :desc, :numSer, :estado, :igual)");
$comprobacionExistencia = insertarElemento($miPdo, $consultaInsertar, $name, $description, $serialNumber, $condition, $priority);

print_r(Respuesta::mensaje(True, "Nuevo elemento creado en la bd", $comprobacionExistencia));


/////////////////////////

//$elementoUno = new Element($name, $description, $serialNumber, $condition, $priority);


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



