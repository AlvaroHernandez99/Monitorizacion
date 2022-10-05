<?php
require_once "./DWES/primera/ws/createElement.php";

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
        return $this;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    public function getSerialNumber()
    {
        return $this->serialNumber;
    }

    public function setSerialNumber($serialNumber)
    {
        $this->serialNumber = $serialNumber;
        return $this;
    }

    public function getCondition()
    {
        return $this->condition;
    }

    public function setCondition($condition)
    {
        $this->condition = $condition;
        return $this;
    }

    public function getPriority()
    {
        return $this->priority;
    }

    public function setPriority($priority)
    {
        $this->priority = $priority;
        return $this;
    }

    public function toJson(){
        //
    } 

    public function mostrar(){
        echo "name " . $_POST["nombre"] . "description " . $_POST["desc"] . "serialNumber" . $_POST["numSer"] . "condicion" . $_POST["prio"] . "prioridad" . $_POST['igual'];
    }

}
?>