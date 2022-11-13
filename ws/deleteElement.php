<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "Respuesta.php";

//hacemos su conexion y le asignamos un nombre al pdo
$conect = Conexion::conectar();
$miPdo = $conect->getPdo();

$id = $_GET['id'] ?? null;

if((!empty($_GET['id']))){ 

    $consultaComprobarSiExiste = "SELECT * FROM elementos WHERE id = ?";
    $comprobacionExistencia = comprobarBD($miPdo, $consultaComprobarSiExiste, $id);

    //me borrar el elemento gucciiii
    $consultaBorrar = "DELETE FROM elementos WHERE id = ?";
    $consultaEjecutada = borrarElemeto($miPdo, $consultaBorrar, $id);

     //SI el id se encuentra en la bd que me saque los datos por pantalla, si no, no existe
    if($comprobacionExistencia == true){
        print_r(Respuesta::mensaje(True, "Elemento encointrado, se ha borrado correctamente", $comprobacionExistencia));
    }else{
        echo "El id seleccionado no existe en el BD";
    } 
}else{
    print_r(Respuesta::mensaje(False, "Elemento no encointrado, seleccione un id correcto", null));
    
}


// funciones preparadas
function borrarElemeto($pdo, $consultaAEjecutar, $id){
    try{
        $consultaAEjecutar = $pdo->prepare("DELETE FROM elementos WHERE id = ?");
        $consultaAEjecutar->execute([$id]);
        $resultados= $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        foreach ($resultados as $re) {
        //ARREGLAR PARA QUE ME SAQUE TODOS LOS DATOS del ELEMENTO BORRADO  EN EL FORMATO ESPECIFICADO (array)
            //print_r($re);
            return $re;
        } 
    }catch (PDOException $e){
        return null;
    }
}

function comprobarBD($pdo, $consultaAEjecutar, $id){
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

