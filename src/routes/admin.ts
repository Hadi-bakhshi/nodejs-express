import { Router } from 'express';
import productsController from '../controller/products';

const adminRouter = Router();

// /admin/add-product => GET
adminRouter.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
adminRouter.post('/add-product', productsController.postAddProduct);

export default adminRouter;
