<?php
require_once "./interfaces/IToJson.php"; 
require_once "./createElement.php";

class Element implements IToJson{
    public $name;
    public $description;
    
    public $serialNumber;
    public $condition; //estado 
    public $priority;


    public function __construct($name, $description, $serialNumber, $condition, $priority){
        $this->name = $name;
        $this->description = $description;
        $this->serialNumber = $serialNumber;
        $this->condition = $condition;
        $this->priority = $priority;
    }
    
    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getSerialNumber()
    {
        return $this->serialNumber;
    }

    public function setSerialNumber($serialNumber)
    {
        $this->serialNumber = $serialNumber;
    }

    public function getCondition()
    {
        return $this->condition;
    }

    public function setCondition($condition)
    {
        $this->condition = $condition;
    }

    public function getPriority()
    {
        return $this->priority;
    }

    public function setPriority($priority)
    {
        $this->priority = $priority;
    }

    public function toJson(){
        //array creado para que se almacene la info ----> SALE POR PANTALLA
        $arrayElements = array('nombre' => $this->name, 'descripcion' =>$this->description, 
        'numero de serie'=>$this->serialNumber, 'estado'=>$this->condition, 'prioridad'=>$this->priority
    );
        $encodeArray = json_encode($arrayElements);
        echo "Los datos del elemento introducidos en la base de datos son: " . $encodeArray;
        
        //ESTO ES LO QUE ESCRIBE AL ARCHIVO DE LA BASE DE DATOS 
        $writeDB = fopen("./DB.txt", "a"); // "a", append -> para que no sobreescriba
        fwrite($writeDB, $encodeArray . PHP_EOL);
        fclose($writeDB);
    }

    public function mostrar(){
        echo "name " . $this->name . "description " . $this->description . "serialNumber" . $this->serialNumber . "condicion" . $this->condition . "prioridad" . $this->priority;
    }
}
?>