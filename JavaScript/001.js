<!-- HTML file: User input -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="001.css">
</head>
<body>
    <p id="output"></p>
    <script src="001.js"></script>
</body>
</html>


/* CSS file: User input */

body {
    background-color: wheat;
}


// JavaScript file: User input

let name = prompt("What's your name?");

if (name) {
    document.getElementById("output").textContent = "Hi " + name + ", have a nice day.";
}
