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
        // meter Finally
        

    }
}
    

?>