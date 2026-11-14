<!-- HTML file: Counting consonants -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counting consonants</title>
    <link rel="stylesheet" href="008.css">
</head>
<body>
    <p id="output"></p>
    <script src="008.js"></script>
</body>
</html>


/* CSS file: Counting consonants */

body {
    background-color: wheat;
}


// JavaScript file: Counting consonants

let text = "JavaScript is used for both front-end and back-end development.";

let consonants = text.match(/[^aeiou]/gi);

let count = consonants ? consonants.filter(char => /[a-z]/i.test(char)).length : 0;

document.getElementById("output").innerHTML = `Total consonant count: ${count}`;
