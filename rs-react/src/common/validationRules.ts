export const validationProductName = (prodName: string) => {
  return prodName.length > 3;
};

export const validationProductPriceStock = (prodPriceStock: string) => {
  return prodPriceStock.length > 1;
};

export const validationProductCategoryImage = (prodCategoryImage: string) => {
  return prodCategoryImage.length !== 0;
};
