function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background(220);
  background("white");

  // Rectangle size
  const rectSize = 50;

  // Stroke width and color (black)
  strokeWeight(1);
  stroke(0);

  // Draw connecting line before rectangles (ordering)
  line(rectSize/2, height/2, width/2, rectSize/2);

  // Red rectangle at top center
  fill("red");
  rect(width/2 - rectSize/2, 0, rectSize, rectSize);

  // Blue rectangle at left center-height
  fill("blue");
  rect(0, height/2 - rectSize/2, rectSize, rectSize);
}
