<?php

$destino="servicios@hlconstrucciones.com";
$asunto = 'Correo enviado desde la web hlconstrucciones.com';
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$lugar = $_POST['lugar'];
$servicio = $_POST['servicio'];
$mensaje = $_POST['mensaje'];
$contenido = 
"\nnombre: " . $nombre . 
"\ntelefono: " . $telefono .
"\ncorreo: " . $correo . 
"\nlugar: " . $lugar . 
"\nservicio: " . $servicio . 
"\nmensaje: " . $mensaje;
    if (mail($destino, $asunto, $contenido))
    echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente.');</script>";
    echo "<script type='text/javascript'>window.location.href='../index.html';</script>";

?>
