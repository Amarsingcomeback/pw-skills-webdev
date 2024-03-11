function calculateCircleArea(radius) {
  // Calculate the area of the circle using the formula: π * r^2
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Example usage:
let circleRadius = 5;
let circleArea = calculateCircleArea(circleRadius);
console.log(
  "The area of the circle with radius",
  circleRadius,
  "is:",
  circleArea.toFixed(2)
);
