const productDetails = {
    name : "Apple 2020 Macbook Air Lactop",
    price : 82000,
    color : "Gray",
    hardDisk: "256 GB"
}
function productDetailsfn(item){
    console.log(`Product name : ${productDetails["name"]}`);
    console.log(`Product Price : ${productDetails["price"]}`);
    console.log(`Product Color : ${productDetails["color"]}`);
    console.log(`Product hardDisk : ${productDetails["hardDisk"]}`);
}
productDetailsfn()