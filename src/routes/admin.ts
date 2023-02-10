import { Router } from 'express';
import adminController from '../controller/admin';

const adminRouter = Router();

// /admin/add-product => GET
adminRouter.get('/add-product', adminController.getAddProduct);

adminRouter.get('/products', adminController.adminProducts);

// /admin/add-product => POST
adminRouter.post('/add-product', adminController.postAddProduct);

export default adminRouter;
