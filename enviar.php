<?php
header('Content-Type: text/html; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Honeypot anti-spam
    if (!empty($_POST["website"])) {
        header("Location: index.html");
        exit;
    }

    // Limpieza y prevención de inyección de cabeceras (CRLF)
    $sanitize_header = static function (string $val): string {
        return str_replace(["\r", "\n", "%0a", "%0d"], '', strip_tags(trim($val)));
    };

    $nombre = $sanitize_header($_POST["nombre"] ?? '');
    $contacto_dato = $sanitize_header($_POST["contacto_dato"] ?? '');
    $asunto = $sanitize_header($_POST["asunto"] ?? '');
    $mensaje = trim(strip_tags($_POST["mensaje"] ?? ''));

    if ($nombre === '' || $contacto_dato === '' || $asunto === '' || $mensaje === '') {
        echo "<script>alert('Por favor, completa todos los campos.'); window.history.back();</script>";
        exit;
    }

    $destinatario = "info@angelesdeesperanzaac.org, angelesdeesperanza23@gmail.com";
    $asunto_email = "=?UTF-8?B?" . base64_encode("Nuevo mensaje web: $asunto") . "?=";

    $cuerpo = "Has recibido un nuevo mensaje desde la Landing Page de Ángeles de Esperanza A.C.\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Teléfono / WhatsApp de contacto: $contacto_dato\n";
    $cuerpo .= "Asunto: $asunto\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = [
        "MIME-Version: 1.0",
        "From: Ángeles de Esperanza A.C. <noreply@angelesdeesperanzaac.org>",
        "Content-Type: text/plain; charset=UTF-8",
        "X-Mailer: PHP/" . phpversion()
    ];

    // Solo agregar Reply-To si el dato proporcionado es un correo válido (RFC 5322)
    if (filter_var($contacto_dato, FILTER_VALIDATE_EMAIL)) {
        $headers[] = "Reply-To: $contacto_dato";
    }

    if (mail($destinatario, $asunto_email, $cuerpo, implode("\r\n", $headers))) {
        echo "<script>alert('Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo a la brevedad.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
