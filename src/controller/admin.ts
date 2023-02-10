import type { Request, Response } from 'express';
import { IProducts, Product } from '@src/models/product';
import type { Shop } from './types';

const getAddProduct = (req: Request, res: Response) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true,
  } as Omit<Shop, 'prods'>);
};
const postAddProduct = (req: Request, res: Response) => {
  const { title }: { title: string } = req.body;
  // products.push({ title });
  const product = new Product(title);
  product.save();
  res.redirect('/');
};

const adminProducts = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    } as Shop);
  });
};

export default {
  getAddProduct,
  adminProducts,
  postAddProduct,
} as const;
