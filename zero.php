<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "studywellmail1@gmail.com";  // your Gmail
    $subject = "New Form Submission";
    $body = "Email: $email\nMessage: $message";
    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
}
?>
