import { ECategory } from '@/enums/category';

export interface ITopPageAdvantage {
  _id: string;
  description: string;
  title: string;
}

export interface IHhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface ITopPageModel {
  _id: string;
  advantages?: ITopPageAdvantage[];
  alias: string;
  category: string;
  createdAt: Date;
  firstCategory: ECategory;
  hh?: IHhData;
  metaDescription: string;
  metaTitle: string;
  secondCategory: string;
  seoText?: string;
  tags: string[];
  tagsTitle: string;
  title: string;
  updatedAt: Date;
}
