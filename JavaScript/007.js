<!-- HTML file: Counting vowels -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counting vowels</title>
    <link rel="stylesheet" href="007.css">
</head>
<body>
    <p id="output"></p>
    <script src="007.js"></script>
</body>
</html>


/* CSS file: Counting vowels */

body {
    background-color: wheat;
}


// JavaScript file: Counting vowels

let text = "JavaScript is used for both front-end and back-end development.";

let vowels = text.match(/[aeiou]/gi);

let count = vowels ? vowels.length : 0;

document.getElementById("output").innerHTML = `Total vowel count: ${count}`;
