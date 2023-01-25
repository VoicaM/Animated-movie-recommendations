<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
  $cnx = mysqli_connect("localhost","root","","filme");
  if (mysqli_connect_errno()) {
    die("Conectare la MySQL nereusita: " . mysqli_connect_error());
 };  
 mysqli_set_charset($cnx,"utf8");
 header("Content-Type: application/json; charset=UTF-8");
?>