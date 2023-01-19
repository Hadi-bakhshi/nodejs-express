import type { Request, Response } from 'express';

interface IProducts {
  title: string;
}

const products: IProducts[] = [];

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
  products.push({ title });
  res.redirect('/');
};

const getProducts = (req: Request, res: Response) => {
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
