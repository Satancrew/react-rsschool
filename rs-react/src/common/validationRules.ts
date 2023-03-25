export const validationProductName = (prodName: string) => {
  return prodName.length < 3 ? false : true;
};

export const validationProductPriceStock = (prodPriceStock: string) => {
  return prodPriceStock.length < 1 ? false : true;
};

export const validationProductCategoryImage = (prodCategoryImage: string) => {
  return prodCategoryImage.length === 0 ? false : true;
};
