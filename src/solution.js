/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const newProducts = products[i]
    for (let j = 0; j < newProducts.availableSizes.length; j++) {
      if (newProducts.availableSizes[j] === size) {
        result.push(newProducts);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  let getName = products.map(name=>name.name)
  return getName.length >= 4
}

function checkForSizeByName(products, name, size) {
  if(!products) return false
  let product = null;
  for (let i = 0; i < products.length; i++) {
    const newestProducts = products[i]
    if (newestProducts.name === name) {
      product = newestProducts;
    }
  }


  if(!product) return false
  return product.availableSizes.includes(size)
}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
