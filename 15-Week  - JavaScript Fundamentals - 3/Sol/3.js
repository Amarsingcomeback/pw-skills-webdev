// create object
const myObject = {
  name: "manish kumar sethi",
  age: 14,
  class: "VII",
};

//console.log(Object.keys(myObject).length);

// count the object properties
function countProperties(myObject) {
  console.log(`Takes Object Number is : ${Object.keys(myObject).length}`);
}

countProperties(myObject);
