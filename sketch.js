let plantSize = 1;
let originalPlantSize = plantSize;
let startColor;
let endColor;
let currentColor;
let colorStep = 0; // Step for changing colors
let maxPlantSize = 1.7;
let maxPlantHeightReached = false;
let waterSound;
let textColor = 'white'; // Initial text color

function preload() {
  // Load the sound file
  waterSound = loadSound("watersound.mp3");
}

function setup() {
  createCanvas(500, 600);
  startColor = color('#BAC77F');
  endColor = color('#588157');
  currentColor = startColor;
}

function draw() {
  background("#A7D0D9");
  //Text
  fill(textColor); // Set text color
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  textSize(50);
  if (plantSize >= 1.7) {
    textColor = color("#fcf6bd"); // Change text color to yellow
  } else {
    textColor = 'white'; // Reset text color to initial color
  }
  text('Get Well Soon!', 250, 75);
  //Pot
  noStroke();
  fill(139, 69, 19); // Brown color
  quad(200, 500, 170, 400, 330, 400, 300, 500);
  fill('#d4a373');
  rect(175, 500, 150, 20);
  //Plant
  fill(currentColor);
  triangle(170, 400, 140, 350 / plantSize, 220, 400);
  triangle(280, 400, 360, 350 / plantSize, 330, 400);
  triangle(200, 400, 170, 320 / plantSize, 240, 400);
  triangle(250, 400, 330, 320 / plantSize, 300, 400);
  triangle(220, 400, 200, 290 / plantSize, 280, 400);
  triangle(230, 400, 290, 290 / plantSize, 280, 400);
  triangle(220, 400, 250, 270 / plantSize, 280, 400);
}

function mousePressed() {
  if (mouseY > 350 && mouseY < 400) {
    if (plantSize < maxPlantSize) {
      growPlant();
      changeColor();
      waterSound.play(); // Play the sound when clicked
    } else {
      resetPlant();
      currentColor = startColor;
      colorStep = 0; // Reset color step
      maxPlantHeightReached = true;
    }
  }
}

function growPlant() {
  plantSize += 0.1; // Increase the size of the plant
}

function resetPlant() {
  plantSize = originalPlantSize; // Reset the plant size to its original value
}

function changeColor() {
  currentColor = lerpColor(startColor, endColor, colorStep); // Interpolate between start and end colors
  colorStep += 0.4; // Increase color step
  if (colorStep > 1) {
    colorStep = 1; // Limit the color step to 1
  }
}
