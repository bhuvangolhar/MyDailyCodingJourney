<!-- HTML file: Length of string -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Length of string</title>
    <link rel="stylesheet" href="003.css">
</head>
<body>
    <p id="output"></p>
    <script src="003.js"></script>
</body>
</html>


/* CSS file: Length of string */

body {
    background-color: wheat;
}


// JavaScript file: Length of string

let text = "Full Stack Development";

let length = text.length;

document.getElementById("output").textContent = `The number of characters in "${text}" is: ${length}`;
