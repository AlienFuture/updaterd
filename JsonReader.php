<?php
class JsonReader {
    protected $values;
    public function __construct($path) {
        $rawValues = file_get_contents($path);
        $this->values = json_decode($rawValues, true);
    }

    public function getValues():array
    {
        return $this->values;
    }
    
    public function getValuesByKey($key):array
    {
        [$type,$index] = explode('-', $key);
        return $this->values[$type]['values'][$index];
    }
}
?>
