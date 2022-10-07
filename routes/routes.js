const express = require('express');

const shopRouter = require('./shop/shop');
const adminRouter = require('./admin/admin');

// Router
const appRouter = express.Router();



appRouter.use('/admin', adminRouter);
appRouter.use('/shop', shopRouter)


module.exports = appRouter
