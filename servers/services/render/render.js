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

exports.create_box = (req, res) =>{
    res.render('create_order');
}

exports.update_box = (req, res) =>{
    //make a get request to product api and get data of unique id
    axios.get("http://localhost:3000/api/product/", {params: {id: req.query.id}})
        .then(function(productsdata){
            res.render('update_order', {products: productsdata.data });
        })
        .catch(err => {
            res.send(err);
        })

}