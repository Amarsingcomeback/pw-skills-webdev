const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

function FindMaxMin() {
  let maxPrice = products[0];
  let minPrice = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxPrice.price) {
      maxPrice = products[i];
    }

    if (products[i].price < minPrice.price) {
      minPrice = products[i];
    }
  }

  console.log(`The Product with maximum amount is ${maxPrice.name} Which is  priced at RS: ${maxPrice.price}`);
  console.log(`The Product with maximum amount is ${minPrice.name} Which is  priced at RS: ${minPrice.price}`);
}

FindMaxMin();
