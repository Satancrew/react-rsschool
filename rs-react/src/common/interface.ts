export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  image?: string;
  rating: string;
  stock: string;
  rules?: boolean;
}

export interface IProducts {
  products: IProduct[];
}

export interface IModal {
  [props: string]: never;
}

export interface ISearch {
  term: string;
  setTerm: (term: string) => void;
  response: string;
  setResponse: (response: string) => void;
  setCharactersArr?: React.Dispatch<React.SetStateAction<Character[]>>;
  setLoaderStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IForm {
  onAddProduct: (ev: IProduct) => void;
}

export type HeaderProps = {
  checkHomeBtn: boolean;
  checkAboutBtn: boolean;
};

export type InputTypes = {
  title: string;
  price: string;
  stock: string;
  category: string;
  image: FileList;
  rating: string;
  rules: boolean;
  errorMessage: string;
};

export type Character = {
  id?: number;
  name: string;
  gender: string;
  image: string;
  status?: string;
  species?: string;
  type?: string;
  location?: {
    name: string;
    url: string;
  };
  showModal?: React.Dispatch<React.SetStateAction<boolean>>;
  getCharacter?: React.Dispatch<React.SetStateAction<Character>>;
};

export type ModalCardType = {
  character: Character;
};
