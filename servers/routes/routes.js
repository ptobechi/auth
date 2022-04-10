const express = require('express');
const route = express.Router()

const services = require('../services/render/render');
const controller = require('../controllers/product');
const order = require('../controllers/order');
const todo = require('../controllers/todo');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description Users Route
 *  @method GET /
 */
 route.get('/user',  services.userRoutes);

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

/**
 *  @description for view user orders
 *  @method GET /update_box
 */
 route.get('/orders', services.view_orders)

 /**
 *  @description for view user orders
 *  @method GET /update_box
 */
  route.get('/user/view_order', services.view_orders_details)

  /**
 *  @description for view user orders
 *  @method GET /update_box
 */
   route.get('/user/create_todo_list', services.create_todo_list)


  /**
 *  @description for view user orders
 *  @method GET /update_box
 */
   route.get('/user/create_shoppinglist', services.create_order)


// Product API
route.post('/getProducts', controller.getProduct);
route.post('/api/upload/product', controller.upload);
route.post('/api/product', controller.create);
route.get('/api/product', controller.find);
route.put('/api/product/:id', controller.update);
route.delete('/api/product/:id', controller.delete);


//Orders API
route.post('/api/user/place_order', order.create)
route.get('/api/user/orders', order.find)
route.post('/api/user/create_todo_list', todo.create)
route.get('/api/user/todo_list', todo.find)


module.exports = route