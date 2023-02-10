import { IProducts } from '@src/models/product';

export type Shop = {
  prods: IProducts[];
  pageTitle: string;
  path: string;
};
