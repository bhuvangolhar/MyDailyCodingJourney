<!-- HTML file: String concatenation -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String concatenation</title>
    <link rel="stylesheet" href="002.css">
</head>
<body>
    <p id="output"></p>
    <script src="002.js"></script>
</body>
</html>


/* CSS file: String concatenation */

body {
    background-color: wheat;
}


// JavaScript file: String concatenation

let username = "johndoe";
let domain = "gmail.com";

let email = username + "@" + domain;

document.getElementById("output").textContent = "Email Address: " + email;
