<?php
if(isset($_POST['submit'])){
    $to = "sergiohn1995@gmail.com"; 
    $subject = "Mensaje de " . $_POST['nombre'];
    $mensaje = "Nombre: " . $_POST['nombre'] . "\n\nEmail: " . $_POST['mail'] . "\n\n" . $_POST['mensaje'];
    $headers = "From: " . $_POST['mail'] . "\r\n" .
               "Reply-To: " . $_POST['mail'] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    mail($to, $subject, $message, $headers);
    echo "Gracias por contactar con nosotros";
}
?>
