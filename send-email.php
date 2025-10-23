<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $first = htmlspecialchars($_POST["first_name"] ?? '');
  $last = htmlspecialchars($_POST["last_name"] ?? '');
  $email = htmlspecialchars($_POST["email"] ?? '');
  $phone = htmlspecialchars($_POST["phone"] ?? '');
  $message = htmlspecialchars($_POST["message"] ?? '');

  $to = "info@simoncapon.co.uk"; // <-- your dad’s email
  $subject = "New Contact Form Submission from $first $last";
  $body = "
  Name: $first $last\n
  Email: $email\n
  Phone: $phone\n
  Message:\n$message
  ";

  $headers = "From: noreply@sportsmindmastered.co.uk\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    http_response_code(500);
    echo "error";
  }
} else {
  http_response_code(405);
  echo "method not allowed";
}
?>
