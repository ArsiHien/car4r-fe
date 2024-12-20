export type CarCategoryBasic = {
  id: string;
  name: string;
  type: string;
  description: string;
  numberOfPerson: number;
  steering: string;
  gasoline: number;
  price: number;
  promotionPrice: number | null;
  mainImage: string;
};
