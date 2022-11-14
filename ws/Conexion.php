<?php
include_once "./BaseDatos.php";

class Conexion{
    
    static function conectar(){
        try{
            // Conexión
            $host = '127.0.0.1';
            $user = 'root';
            $password = '';
            $name = 'monfab';
            $port= "3306";
            
            //instanciar baseDatos
            $dataBase = new BaseDatos($user, $password, $host, $port, $name);
            return $dataBase;
        }catch (PDOException $e){ 
            return null;
        }
    }

    /*  static function cerrarConexion(&$conexion){
        //Para pasarla por referencia
        //Se pone a null ya que es un objeto... para que se le vaya el valor y no tener que borrarlo
        $conexion = null;
    } */
}
?>