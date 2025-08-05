export interface ITypesCard {
  id: number;
  onDetails?: () => void;
  image: string;
  title: string;
  category: string;
  description: string;
  price: string;
}
