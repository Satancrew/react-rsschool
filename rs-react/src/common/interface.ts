export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  image?: string;
  rating: string;
  stock: string;
}

export interface ModalProps {
  onAddProduct?: (el: IProduct) => void;
}
