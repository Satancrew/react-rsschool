export const validationProductName = (prodName: string) => {
  return prodName.length < 3 ? false : true;
};

export const validationProductNumbers = (prodNumbers: string) => {
  return prodNumbers.length < 1 ? false : true;
};

export const validationProductCategory = (prodCategory: string) => {
  return prodCategory.length === 0 ? false : true;
};
