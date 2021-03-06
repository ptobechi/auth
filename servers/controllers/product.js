const Product = require("../models/Product");
const Box = require("../models/Box");

//create order/box
exports.upload = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new product
    const product = new Product({
        name: req.body.product,
    })

    //save product to database
    product
        .save(product)
        .then(data => {
            // res.send(data)
            // alert("Product uploaded successfully")
            res.redirect("/admin")
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occured while creating a create operation"
            })
        })
};

exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const box = req.body.box_name;
    const description = req.body.box_description;
    const total_sum = req.body.total_price;
    const items = req.body.item;
    const prices = req.body.price;
    const items_list = [];

    //Set Box
    for(let i =0; i < items.length; i++){
        items_list.push({"item":items[i], "price":prices[i]});
    }

    //new product
    const itemBox = new Box({
        box: box,
        description: description,
        items: items_list,
        total_sum: total_sum
    })

    //save product to database
    itemBox
        .save(itemBox)
        .then(data => {
            // res.send(data)
            res.redirect("/admin")
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occured while creating a create operation"
            })
        })
};

//retrieve and return all products/single products
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;
        Box.findById(id)
        .then(itemBox => {
            if(!itemBox){
                res.status(404).send({message: "Product not found"})
            }else{
                res.send(itemBox);
            }
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })


    }else{
        Box.find()
        .then(itemBox => {
            res.send(itemBox);
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "An Error occured retriving products"})
        })
    }
    

};

//update a product
exports.update = (req, res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    // console.log(req.body)

    Box.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot update product with ${id}. This is not a valid ID`})
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updating product"})
        })

};

//delete products
exports.delete = (req, res)=>{
    const id = req.params.id;
    Box.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot delete product with ${id}. This is not a valid ID`})
            }else{
                res.status(200).send({message: `product deleted sucesdful`})

            }
        })
        .catch(err => {
            res.status(500).send({message: "Could not delete product"})
        })
};

exports.getProduct = async (req, res) =>{
    let payload = req.body.payload.trim();
    let search = await Product.find({name: new RegExp(payload,'i')}).exec();
    //Limit Seaexh Result to ten
    search = search.slice(0, 10);
    res.send({payload: search});


}