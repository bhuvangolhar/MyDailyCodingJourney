<!-- HTML file: Conversion to uppercase -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversion to uppercase</title>
    <link rel="stylesheet" href="005.css">
</head>
<body>
    <p id="output"></p>
    <script src="005.js"></script>
</body>
</html>


/* CSS file: Conversion to uppercase */

body {
    background-color: wheat;
}


// JavaScript file: Conversion to uppercase

let text = "HyperText Markup Language";

let uppercaseText = text.toUpperCase();

document.getElementById("output").innerHTML = `Original: "${text}" <br> Uppercase: "${uppercaseText}"`;
