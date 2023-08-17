/*This function accepts 3 parameters:
    -products: it has to be an array of products
    -desc: will be either true/false, to change the order of the sorting (descending or ascending)
    -amount: How many items we want to return.


It will return an array of objects sorted by how many times it appears on the data.
*/

export const calculateTopSells = (products, desc, amount) => {
  //Counting the items to see how many we have of each
  const itemsCount = products.reduce((acc, crr) => {
    if (!acc[crr.product.id]) {
      acc[crr.product.id] = {
        qty: 0,
        data: {
          name: crr.product.name,
          SKU: crr.product.SKU,
          id: crr.id,
          size: crr.size.size,
        },
      };
    }

    acc[crr.product.id].qty += crr.quantity;

    return acc;
  }, {});

  const arrObj = Object.values(itemsCount);

  let filteredProducts;

  if (desc) {
    filteredProducts = arrObj.sort((a, b) => {
      return b.qty - a.qty;
    });
  } else {
    filteredProducts = arrObj.sort((a, b) => {
      return a.qty - b.qty;
    });
  }

  return filteredProducts.slice(0, amount);
};
