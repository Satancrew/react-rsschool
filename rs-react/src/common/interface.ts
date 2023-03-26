export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  image?: string;
  rating: string;
  stock: string;
}

export interface IProducts {
  products: IProduct[];
}

export interface IModal {
  [props: string]: never;
}

export interface IForm {
  onAddProduct: (ev: IProduct) => void;
  validateName: boolean;
  validatePrice: boolean;
  validateStock: boolean;
  validateCategory: boolean;
  validateImage: boolean;
  validateChecked: boolean;
  errorMessage: boolean;
}

export type FormValidation = {
  validateName: boolean;
  validatePrice: boolean;
  validateStock: boolean;
  validateCategory: boolean;
  validateImage: boolean;
  validateChecked: boolean;
  errorMessage: boolean;
  prodId: number;
};
