<?php
$_POST = json_decode(file_get_contents('php://input'), true);
echo var_dump($_POST);//команда берет данные пришедшие от клиента и превращает их в строку 
