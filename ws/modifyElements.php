<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "Respuesta.php";

//hacemos su conexion y le asignamos un nombre al pdo
$conect = Conexion::conectar();
$miPdo = $conect->getPdo();

$id = $_GET['id'] ?? null;
$name = $_POST["nombre"] ?? "PC";
$description = $_POST["desc"] ?? "GAMING";
$serialNumber = $_POST["numSer"] ?? "1234";
$condition =  $_POST["estado"] ?? "ActivoPAPI";
$priority =  $_POST["igual"];
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
    //Si lo dejo, siempre me va a coger la por defecto
    /* default:
        $priority = "simrep"; 
    break;*/
}


//comprobacion para saber si le has pasado un id
if(!empty($_GET['id'])){

    $respuesta = $miPdo->prepare('SELECT COUNT(*) as filas FROM elementos WHERE id = :id');
    $respuesta->bindParam(':id', $id, PDO::PARAM_INT);
    $respuesta->execute();
    
    if($respuesta->fetchColumn() > 0){

        
        //print_r(Respuesta::mensaje(True, "Usuario encontrado (DATOS ANTIGUOS)", $comprobacionExistencia));

        //Una vez que nos ha mostrado los datos, que los nuevos introducidos nos los cambie en la db
        $consultaUpdate = ("UPDATE elementos SET 
                            nombre = :nombre, 
                            descripcion = :desc, 
                            nserie = :numSer,
                            estado = :estado, 
                            prioridad = :igual where id = :id");

        $comprobarUpdate = modificarDatos($miPdo, $consultaUpdate, $name, $description, $serialNumber, $condition, $priority, $id);
        $consultarExistencia = "SELECT * FROM elementos WHERE id = ?";

        $comprobacionExistencia = modificarSiExiste($miPdo, $consultarExistencia, $id);
        print_r(Respuesta::mensaje(True, "Usuario encontrado y datos actualizados", $comprobacionExistencia));


    }else{
        print_r(Respuesta::mensaje(False, "El id introducido no existe en la base de datos", null));
    }
}else{
    print_r(Respuesta::mensaje(False, "Elemento no encontrado, seleccione un id", null));
}



//Muestra los datos si existe en la bd
function modificarSiExiste($pdo, $consultaAEjecutar, $id){
    try{
        $consultaAEjecutar = $pdo->prepare("SELECT * FROM elementos WHERE id = ?");
        $consultaAEjecutar->execute([$id]);
        $resultados = $consultaAEjecutar->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;  
    }catch (PDOException $e){
        return null;
    }
} 


function modificarDatos($pdo, $consultaUpdate, $name, $description, $serialNumber, $condition, $priority, $id){

    $consultaUpdate = ("UPDATE elementos SET 
                            nombre = :nombre, 
                            descripcion = :desc, 
                            nserie = :numSer,
                            estado = :estado, 
                            prioridad = :igual where id = :id");

    $consultaAEjecutar = $pdo->prepare($consultaUpdate);
    
    $consultaAEjecutar->bindParam(':nombre', $name, PDO::PARAM_STR);
    $consultaAEjecutar->bindParam(':desc', $description, PDO::PARAM_STR);
    $consultaAEjecutar->bindParam(':numSer', $serialNumber, PDO::PARAM_STR);
    $consultaAEjecutar->bindParam(':estado', $condition, PDO::PARAM_STR);
    $consultaAEjecutar->bindParam(':igual', $priority, PDO::PARAM_STR);  
    $consultaAEjecutar->bindParam(':id', $id, PDO::PARAM_INT);
    $exe = $consultaAEjecutar->execute();

// SI ALGUNO NO VIENE POR EL IMPUT DEJARLO COMO ESTÁ








}











/////////////////////////////



/* $consulta = "UPDATE elementos SET 
            nombre=':nombre', 
            descripcion=':descripcion', 
            numero de serie=':serialNumber',
            estado=':estado', 
            prioridad=':prioridad' where id = ':id' ";


$consultaUpdate = $miPdo -> prepare($consulta);
$consultaUpdate->execute($arrayElements); */