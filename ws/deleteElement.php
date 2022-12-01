<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "Respuesta.php";

/* $datos = file_get_contents('php://input');
var_dump($datos);  
 */
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

$id = $_GET['id'] ?? null;

if((!empty($_GET['id']))){ 
    $consultaComprobarSiExiste = "SELECT * FROM elementos WHERE id = ?";
    $comprobacionExistencia = comprobarBD($miPdo, $consultaComprobarSiExiste, $id);

    $consultaBorrar = "DELETE FROM elementos WHERE id = ?";
    $consultaEjecutada = borrarElemeto($miPdo, $consultaBorrar, $id);

     //SI el id se encuentra en la bd que me saque los datos por pantalla, si no, no existe
    if($comprobacionExistencia == true){
        echo Respuesta::mensaje(true, "Elemento encontrado, se ha borrado correctamente", $comprobacionExistencia);
    }else{
        echo Respuesta::mensaje(false, "Elemento no encontrado, el id ". $id ." no existente en la bd", null);
    } 
}else{
    echo Respuesta::mensaje(false, "Elemento no encointrado, seleccione un id", null);
    
}

function borrarElemeto($pdo, $consultaAEjecutar, $id){
    try{
        $consultaAEjecutar = $pdo->prepare("DELETE FROM elementos WHERE id = ?");
        $consultaAEjecutar->execute([$id]);
        $resultados= $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        foreach ($resultados as $re) {
            return $re;
        } 
    }catch (PDOException $e){
        return null;
    }
}

function comprobarBD($pdo, $consultaAEjecutar, $id){
    try{
        $consultaAEjecutar = $pdo->prepare("SELECT * FROM elementos WHERE id = ?");
        $consultaAEjecutar->execute([$id]);
        $resultados = $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;  
    }catch (PDOException $e){
        return null;
    }
}

