const Order = require("../models/Orders");

exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }
    console.log(req.body)

    const client_name = "Tobechi";
    const client_email = "tobechipaschal@gmail.com";
    const client_phone = "08147153986";
    const client_address = "Abuja Zone 3";
    const shop_basket = req.body.items;
    const prices = req.body.price;
    const total_price = req.body.total_price;
    const delivery_date = req.body.delivery_date;
    const item_list = [];

    for(let i=0; i<shop_basket.length; i++){
        item_list.push({"item":shop_basket[i], "price":prices[i]});
    }

    //New Order
    const shoppingList = new Order({
        client_name: client_name,
        client_email: client_email,
        client_phone: client_phone,
        client_address: client_address,
        box_name: req.body.box_name,
        box_description: req.body.box_description ,
        basket: item_list,
        total_sum: total_price,
        delivery_date: delivery_date,
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

exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        Order.findById(id)
        .then(itemList => {
            if(!itemList){
                res.status(404).send({message: "Order not found"})
            }else{
                // res.send(itemList);
                console.log(itemList)
            }
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })


    }else{
        Order.find()
        .then(itemList => {
            res.send(itemList);
            console.log(itemList)

        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })
    }

}
