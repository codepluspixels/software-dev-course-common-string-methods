// Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript"); // Check if "JavaScript" is in the string
let codingPosition = inputString.indexOf("Coding"); // Find the position of "Coding"
let startsWithWelcome = inputString.trim().startsWith("Welcome"); // Check if it starts with "Welcome"
let endsWithToday = inputString.trim().endsWith("today."); // Check if it ends with "today."

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // Convert to lowercase
let uppercaseString = inputString.toUpperCase(); // Convert to uppercase
let trimmedString = inputString.trim(); // Remove extra spaces
let replacedString = inputString.replace("JavaScript", "coding"); // Replace "JavaScript" with "coding"

// 3. Breaking Apart
let wordsArray = trimmedString.split(" "); // Split string into words

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0); // Get the first character of the trimmed string
let extractedBootcamp = trimmedString.slice(trimmedString.indexOf("Bootcamp"), trimmedString.indexOf("Bootcamp") + 8); // Extract "Bootcamp"

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
