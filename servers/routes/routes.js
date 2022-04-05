const express = require('express');
const route = express.Router()

const services = require('../services/render/render');
const controller = require('../controllers/product');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description Users Route
 *  @method GET /
 */
 route.get('/user', services.userRoutes);

 /**
 *  @description Admin Route
 *  @method GET /
 */
  route.get('/admin', services.adminRoutes);

/**
 *  @description Admin Page Route
 *  @method GET /
 */
//  route.get('/admin', services.adminRoutes);

/**
 *  @description create order/box
 *  @method GET /create_box
 */
route.get('/create_box', services.create_box)

/**
 *  @description for update order/box
 *  @method GET /update_box
 */
route.get('/update_box', services.update_box)


// API
route.post('/getProducts', controller.getProduct);
route.post('/api/upload/product', controller.upload);
route.post('/api/product', controller.create);
route.get('/api/product', controller.find);
route.put('/api/product/:id', controller.update);
route.delete('/api/product/:id', controller.delete);


module.exports = route