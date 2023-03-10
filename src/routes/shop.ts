import { Router } from 'express';
import shopController from '../controller/shop';

const shopRouter = Router();

shopRouter.get('/', shopController.getIndex);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/products/:productId', shopController.getProduct);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/checkout', shopController.getCheckout);
shopRouter.get('/orders', shopController.getOrders);

export default shopRouter;
