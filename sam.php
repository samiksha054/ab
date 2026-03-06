<?php

$data = ["Apple","Banana","Mango","Orange","Grapes","Pineapple","Watermelon"];

$q = $_GET['q'];

$result = [];

foreach($data as $item){
    if(stripos($item,$q) !== false){
        $result[] = $item;
    }
}

echo json_encode($result);

?>
