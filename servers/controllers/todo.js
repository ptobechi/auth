const Todo = require("../models/Todo");

exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }
    console.log(req.body)

    const client_email = "tobechipaschal@gmail.com";
    const userid = "tobechipaschal@gmail.com";
    const shop_basket = req.body.item || req.body.items;
    const prices = req.body.price;
    const total_price = req.body.total_price;
    const item_list = [];

    for(let i=0; i<shop_basket.length; i++){
        item_list.push({"item":shop_basket[i], "price":prices[i]});
    }

    //New Todo
    const shoppingList = new Todo({
        client_email: client_email,
        userid: userid,
        box_name: req.body.box_name,
        box_description: req.body.box_description ,
        body: item_list,
        total_sum: total_price,
        status: false

    });

    shoppingList
        .save(shoppingList)
        .then(data => {
            res.redirect("/user")
        })
        .catch(errv => {
            res.status(500).send({
                message:errv.message || "Some error occured while creating a create operation"
            })
        })
}

//retrieve and return all products/single products
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;
        Todo.findById(id)
        .then(toDO => {
            if(!toDO){
                res.status(404).send({message: "Product not found"})
            }else{
                res.send(toDO);
            }
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })


    }else{
        Todo.find()
        .then(toDO => {
            res.send(toDO);
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })
    }
    

};