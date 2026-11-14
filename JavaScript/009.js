<!-- HTML file: Capitalization -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capitalization</title>
    <link rel="stylesheet" href="009.css">
</head>
<body>
    <p id="output"></p>
    <script src="009.js"></script>
</body>
</html>


/* CSS file: Capitalization */

body {
    background-color: wheat;
}


// JavaScript file: Capitalization

let text = "C & C++ are general-purpose programming languages.";

let capitalizedText = text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

document.getElementById("output").innerHTML = `Original: "${text}"<br>Capitalized: "${capitalizedText}"`;
