export type CarCategoryDetail = {
  id: string;
  name: string;
  type: string;
  description: string;
  numberOfPerson: number;
  steering: string;
  gasoline: number;
  price: number;
  promotionPrice: number | null;
  rating: number;
  reviewersCount: number;
  mainImage: string;
  carImages: string[];
  amenities: string[];
};

export interface CarCategoryRequest {
  name: string;
  type: string;
  description: string;
  numberOfPerson: number;
  steering: string;
  gasoline: number;
  price: number;
  promotionPrice: number;
  mainImage: File | null;
  carImages: File[];
  amenityNames: string[];
}
