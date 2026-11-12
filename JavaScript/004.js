<!-- HTML file: Reverse a string -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse a string</title>
    <link rel="stylesheet" href="004.css">
</head>
<body>
    <p id="output"></p>
    <script src="004.js"></script>
</body>
</html>


/* CSS file: Reverse a string */

body {
    background-color: wheat;
}


// JavaScript file: Reverse a string

let text = "TypeScript";

let reversedText = text.split("").reverse().join("");

document.getElementById("output").innerHTML = `Original: "${text}" <br> Reversed: "${reversedText}"`;
