import type { Request, Response } from 'express';
import { Product } from '@src/models/product';

const getAddProduct = (req: Request, res: Response) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req: Request, res: Response) => {
  const { title }: { title: string } = req.body;
  // products.push({ title });
  const product = new Product(title);
  product.save();
  res.redirect('/');
};

const getProducts = (req: Request, res: Response) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

export default {
  getAddProduct,
  postAddProduct,
  getProducts,
} as const;
