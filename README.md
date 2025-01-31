<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectangle & Cuboid Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .input-group { margin: 10px; }
        .result { font-weight: bold; margin-top: 10px; }
        .image-container { margin: 10px; }
        img { max-width: 100%; height: auto; }
    </style>
</head>
<body>
    <h1>Rectangle & Cuboid Calculator</h1>
    <div class="image-container">
        <img src="Image/Perimeter-image-5-US.webp" alt="Perimeter formula">
        <img src="Image/cicles-16-1598431783.webp" alt="Area formula">
        <img src="Image/Volume-Formula-table-image-1.webp" alt="Volume formula">
    </div>
    <div class='input-group'>
        <label>Length:</label> <input type='number' id='length'>
        <label>Width:</label> <input type='number' id='width'>
        <label>Height:</label> <input type='number' id='height'>
    </div>
    <button onclick="calculateGeometry()">Calculate</button>
    <div id="results" class="result"></div>
    
    <script>
        function calculateGeometry() {
            let l = parseFloat(document.getElementById("length").value);
            let w = parseFloat(document.getElementById("width").value);
            let h = parseFloat(document.getElementById("height").value);
            
            if (isNaN(l) || isNaN(w)) {
                document.getElementById("results").innerText = "Please enter valid numbers for length and width.";
                return;
            }
            
            let perimeter = 2 * (l + w);
            let area = l * w;
            let volume = isNaN(h) ? "N/A" : l * w * h;
            
            document.getElementById("results").innerText = `Perimeter: ${perimeter}, Area: ${area}, Volume: ${volume}`;
        }
    </script>
</body>
</html>

