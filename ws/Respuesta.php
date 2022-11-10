<?php

class Respuesta {

    static function mensaje($boolean, $mensaje, $resultado ){
        $array = [];
        $array["success"] = $boolean;
        $array["message"] = $mensaje;
        $array["data"] = $resultado; 
        $respuestaJson = json_encode($array, JSON_PRETTY_PRINT);
        return $respuestaJson;
    }
}

    





?>