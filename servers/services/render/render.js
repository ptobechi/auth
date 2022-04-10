const axios = require('axios');


exports.homeRoutes = (req, res) => {
    //make a get request to product api
    axios.get("http://localhost:3000/api/product")
        .then(function(response){
             res.render('index', {products: response.data});    
        })
        .catch(err => {
            res.send(err);
        })
}

exports.todoList = (req, res) => {
    //make a get request to product api
    axios.get("http://localhost:3000/api/user/todo_list" )
        .then(function(response){
            //  res.render('users/include/_show_todo_list', {todo: response.data});   
            //  console.log(response.data)
        })
        .catch(err => {
            res.send(err);
        })
}
exports.userRoutes = (req, res) => {
    //make a get request to product api
    axios.get("http://localhost:3000/api/product")
        .then(function(response){
             res.render('users/', {products: response.data});    
        })
        .catch(err => {
            res.send(err);
        })

    axios.get("http://localhost:3000/api/user/todo_list" )
        .then(function(responses){
             res.render('users/', {todo: responses.data});   
            //  console.log(response.data)
        })
        .catch(err => {
            res.send(err);
        })
}

exports.view_orders = (req, res) => {
    //make a get request to product api
    axios.get("http://localhost:3000/api/user/orders")
        .then(function(response){
             res.render('users/orders', {orders: response.data});    
        })
        .catch(err => {
            res.send(err);
        })
}

exports.view_orders_details = (req, res) => {
    //make a get request to product api
    axios.get("http://localhost:3000/api/user/orders", {params: {id: req.query.id}})
        .then(function(response){
             res.render('users/view_orders', {order: response.data});   
            //  console.log(response.data.status)
        })
        .catch(err => {
            res.send(err);
        })
}

exports.create_order = (req, res) =>{
    res.render('users/create_order');
}

exports.create_todo_list = (req, res) =>{
    res.render('users/todo_list');
}

exports.adminRoutes = (req, res) => {
    axios.get("http://localhost:3000/api/product")
        .then(function(response){
             res.render('admin/index', {products: response.data});    
        })
        .catch(err => {
            res.send(err);
        })
}

exports.create_box = (req, res) =>{
    res.render('admin/create_order');
}

exports.update_box = (req, res) =>{
    //make a get request to product api and get data of unique id
    axios.get("http://localhost:3000/api/product/", {params: {id: req.query.id}})
        .then(function(productsdata){
            res.render('admin/update_order', {products: productsdata.data });
        })
        .catch(err => {
            res.send(err);
        })

}