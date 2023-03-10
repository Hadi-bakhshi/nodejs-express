import type { Request, Response } from 'express';
import { IProducts, Product } from '@src/models/product';
import type { Shop } from './types';

// hint: some commented parts are for HBS

const getProducts = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true,
    } as Shop);
  });
};

const getIndex = (req: Request, res: Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true,
    } as Shop);
  });
};

const getCart = (req: Request, res: Response) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  } as Omit<Shop, 'prods'>);
};

const getCheckout = (req: Request, res: Response) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  } as Omit<Shop, 'prods'>);
};
const getOrders = (req: Request, res: Response) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders',
  } as Omit<Shop, 'prods'>);
};
const getProduct = (req: Request, res: Response) => {
  const productId = req.params.productId;
  Product.findById(productId, (product) => {
    console.log(product);
  });
  res.redirect('/');
};
export default {
  getProduct,
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
} as const;
