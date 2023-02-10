import type { Request, Response } from 'express';
import { IProducts, Product } from '@src/models/product';

const getAddProduct = (req: Request, res: Response) => {
  res.render('admin/add-product', {
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

const adminProducts = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

export default {
  getAddProduct,
  adminProducts,
  postAddProduct,
} as const;
