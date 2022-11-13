<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "./models/Element.php";
include_once "Respuesta.php";

$conect = Conexion::conectar();
$miPdo = $conect->getPdo();

$id = $_GET['id'] ?? null;


if(!empty($_GET['id'])){
    $consultaPreparada = 'SELECT * FROM elementos WHERE id = ?';
    $ejerConsulta = ejercutarConsultaPreparada($miPdo, $consultaPreparada, $id);  
}else{
    $consultaMostrarTodo = 'SELECT * FROM elementos';
    $ejerConsulta = mostrarTodo($miPdo, $consultaMostrarTodo);  
} 

if(empty($ejerConsulta)){
    print_r(Respuesta::mensaje(False, "Elemento no encointrado", null));
}else{
    print_r(Respuesta::mensaje(True, "Elemento encointrado", $ejerConsulta));
}


function ejercutarConsultaPreparada($pdo, $consultaAEjecutar, $id){
    //esto sería el input
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