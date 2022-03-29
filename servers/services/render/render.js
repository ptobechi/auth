const axios = require('axios');


exports.homeRoutes = (req, res) => {
    res.render('index');    
}

exports.create_box = (req, res) =>{
    res.render('create_order');
}

exports.update_box = (req, res) =>{
    res.render('update_order');
}