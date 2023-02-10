import { Router } from 'express';
import shopController from '../controller/shop';

const shopRouter = Router();

shopRouter.get('/', shopController.getIndex);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/checkout', shopController.getCheckout);

export default shopRouter;
