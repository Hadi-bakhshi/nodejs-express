import { Router } from 'express';
import productsController from '../controller/products';

const shopRouter = Router();

shopRouter.get('/', productsController.getProducts);

export default shopRouter;
