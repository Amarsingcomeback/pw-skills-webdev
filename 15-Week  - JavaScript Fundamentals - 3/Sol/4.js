function hasProperty(obj, propertyName) {
  // Check if the object has the specified property
  if (obj.hasOwnProperty(propertyName)) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
let user = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

let propertyName = "age";
if (hasProperty(user, propertyName)) {
  console.log(`The object has the property '${propertyName}'.`);
} else {
  console.log(`The object does not have the property '${propertyName}'.`);
}
