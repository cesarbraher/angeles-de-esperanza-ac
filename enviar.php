<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $contacto_dato = strip_tags(trim($_POST["contacto_dato"]));
    $asunto = strip_tags(trim($_POST["asunto"]));
    $mensaje = trim($_POST["mensaje"]);

    if (empty($nombre) || empty($contacto_dato) || empty($asunto) || empty($mensaje)) {
        echo "<script>alert('Por favor, completa todos los campos.'); window.history.back();</script>";
        exit;
    }

    $destinatario = "info@angelesdeesperanzaac.org, angelesdeesperanza23@gmail.com";
    $asunto_email = "Nuevo mensaje web: $asunto";

    $cuerpo = "Has recibido un nuevo mensaje desde la Landing Page de Ángeles de Esperanza A.C.\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Teléfono / WhatsApp de contacto: $contacto_dato\n";
    $cuerpo .= "Asunto: $asunto\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = "From: noreply@angelesdeesperanzaac.org\r\n";
    $headers .= "Reply-To: $contacto_dato\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $asunto_email, $cuerpo, $headers)) {
        echo "<script>alert('Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo a la brevedad.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
