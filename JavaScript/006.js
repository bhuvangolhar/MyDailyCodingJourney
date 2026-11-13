<!-- HTML file: Conversion to lowercase -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversion to lowercase</title>
    <link rel="stylesheet" href="006.css">
</head>
<body>
    <p id="output"></p>
    <script src="006.js"></script>
</body>
</html>


/* CSS file: Conversion to lowercase */

body {
    background-color: wheat;
}


// JavaScript file: Conversion to lowercase

let text = "Cascading Style Sheets";

let lowercaseText = text.toLowerCase();

document.getElementById("output").innerHTML = `Original: "${text}" <br> Lowercase: "${lowercaseText}"`;
