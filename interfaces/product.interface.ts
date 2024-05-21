export interface IProductCharacteristic {
  name: string;
  value: string;
}

export interface IReviewModel {
  _id: string;
  createdAt: Date;
  description: string;
  name: string;
  rating: number;
  title: string;
}

export interface IProductModel {
  __v: number;
  _id: string;
  advantages?: string;
  categories: string[];
  characteristics: IProductCharacteristic[];
  createdAt: Date;
  credit: number;
  description: string;
  disadvantages?: string;
  image: string;
  initialRating: number;
  link: string;
  oldPrice: number;
  price: number;
  reviewAvg?: number;
  reviewCount: number;
  reviews: IReviewModel[];
  tags: string[];
  title: string;
  updatedAt: Date;
}
