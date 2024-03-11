function reverseString(str) {
  // Split the string into an array of characters, reverse it, and join back into a string
  return str.split("").reverse().join("");
}

// Example usage:
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
