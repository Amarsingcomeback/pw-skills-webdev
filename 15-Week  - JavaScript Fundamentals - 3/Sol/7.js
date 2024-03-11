// Initialize an empty Map to store user information
let userMap = new Map();

// Function to add or update user record
function addUserOrUpdate(name, age, email) {
  // Check if the user already exists
  if (userMap.has(email)) {
    console.log("User already exists. Updating information...");
  }
  // Set or update the user information in the Map
  userMap.set(email, { name: name, age: age, email: email });
  console.log("User information added/updated successfully.");
}

// Function to delete user record
function deleteUser(email) {
  // Check if the user exists
  if (userMap.has(email)) {
    userMap.delete(email);
    console.log("User record deleted successfully.");
  } else {
    console.log("User not found. Unable to delete.");
  }
}

// Function to display user information
function displayUserInfo(email) {
  // Check if the user exists
  if (userMap.has(email)) {
    let user = userMap.get(email);
    console.log("Name:", user.name);
    console.log("Age:", user.age);
    console.log("Email:", user.email);
  } else {
    console.log("User not found.");
  }
}

// Adding some initial users
addUserOrUpdate("John Doe", 30, "john@example.com");
addUserOrUpdate("Jane Smith", 25, "jane@example.com");

// Displaying user information
console.log("\nDisplaying user information:");
displayUserInfo("john@example.com");
displayUserInfo("jane@example.com");

// Updating user information
addUserOrUpdate("John Doe", 35, "john@example.com");
console.log("\nUpdated user information:");
displayUserInfo("john@example.com");

// Deleting a user
console.log("\nDeleting user record...");
deleteUser("jane@example.com");

// Trying to display deleted user information
console.log("\nTrying to display deleted user information:");
displayUserInfo("jane@example.com");
