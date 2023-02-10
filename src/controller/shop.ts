import type { Request, Response } from 'express';
import { IProducts, Product } from '@src/models/product';

const getProducts = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

const getIndex = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

export default {
  getProducts,
  getIndex,
} as const;
