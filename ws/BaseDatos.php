<?php

// Valores para establecer conexción con la DB 
class BaseDatos {
    private $user;
    private $password;
    private $host;
    private $port;
    private $name;
    private $pdo;

    // Para poder conectarnos easy
    public function __construct($user, $password, $host, $port, $name)
    {
        $this->user = $user;
        $this->password = $password;
        $this->host = $host;
        $this->port = $port;
        $this->name = $name;

        //Wrapper (envoltorio)
        $dsn="mysql:hosts=$host;port=$port;dbname=$name";

        // El data object... para poder conectarte a la DB en forma de objeto
        $this->pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    }

    //Devuelve el pdo para el resto de fixeros 
    public function getPdo(){
        return $this->pdo;
    }


    public function query($query){
        try {
            $consulta = $this->pdo->query($query);
            return $consulta->fetchAll(PDO::FETCH_ASSOC); //para que no sean duplicados
        }catch(PDOException $e){
            // 1. Mostrar el error por pantalla. SOLO EN DESARROLLO LOCAL, NUNCA PRODUCCIÓN
            // 2. Recomendada. Loggear el error. (que se quede guardada en algún sitio (escribir en un archivo, o por correo o algo)).
            return null;
        }
    }




    
}

?>