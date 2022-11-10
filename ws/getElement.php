<?php
include_once "BaseDatos.php";
include_once "Conexion.php";
include_once "./models/Element.php";
include_once "Respuesta.php";



//hacemos su conexion y le asignamos un nombre al pdo
$conect = Conexion::conectar();
$miPdo = $conect->getPdo();

$id = $_GET['id'] ?? null;

// ??¿?¿?¿?¿?¿?¿?¿?¿¿??¿?¿¿?    EStos try catch hacen falta=? <-----------------------------

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











/* echo "\n";
echo "//////////////////////";
echo "\n";

// CONSULTA SIN PREPARAR ----- OKEY
$consultarId = 'SELECT * FROM elementos where id = "2"';
//ejecutarConsulta($miPdo, $consultarId);

// funciones sin preparar
function ejecutarConsulta($pdo, $consultaAEjecutar){
    try{
        $consulta = $pdo->query($consultaAEjecutar); 
        $resultados = $consulta->fetchAll(PDO::FETCH_ASSOC);
        if(empty($resultados)){
            //3. Devolver los resultados
            echo "no se ha encontrao el elemento";
            //return null;
        }else{
            print_r($resultados);
            //return null;
        }
    }catch(PDOException $e){
        echo "la consulta que no está bien es: --------------- $consultaAEjecutar --------------- \n" ;
        //return null;
        /* echo "el xampp está arrancado pero la consulta no está bien escrita. \n";
    }finally{
        echo "Esto es el final de la consulta... este bien o mal";
    }
} */





?>