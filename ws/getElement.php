<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
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

$id = $_GET['id'] ?? null;

if(!empty($_GET['id'])){
    $consultaPreparada = 'SELECT * FROM elementos WHERE id = ?';
    $ejerConsulta = ejercutarConsultaPreparada($miPdo, $consultaPreparada, $id);  
}else{
    $consultaMostrarTodo = 'SELECT * FROM elementos';
    $ejerConsulta = mostrarTodo($miPdo, $consultaMostrarTodo);  
}
if(empty($ejerConsulta)){
    echo Respuesta::mensaje(False, "Elemento no encontrado", null);
}else{
    echo Respuesta::mensaje(True, "Elemento encontrado", $ejerConsulta);
}


function ejercutarConsultaPreparada($pdo, $consultaAEjecutar, $id){
    try{
        $consultaAEjecutar = $pdo->prepare("SELECT * FROM elementos WHERE id = ?");
        $consultaAEjecutar->execute([$id]);
        $resultados = $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;  
    }catch (PDOException $e){
        return null;
    }
}

function mostrarTodo($pdo, $consultaAEjecutar){
    try{
        $consultaAEjecutar = $pdo->prepare("SELECT * FROM elementos");
        $consultaAEjecutar->execute();
        $resultados= $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;  
    }catch (PDOException $e){
        return null;
    }
}

?>