export const validationProductName = (prodName: string) => {
  if (prodName.length < 3) return false;
  return true;
};
