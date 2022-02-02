import Product from "../models/Product.js";

export const getProducts = async (req,res) =>{
    let products
    try {
        products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    if (!products) {
        return res.status(404).json({message:'no product found'})
    }
}

export const addProduct = async (req, res,next) => {
    let product;
    try {
        product = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            isFeatured: req.body.isFeatured
        })

        product = await product.save();
    } catch (err){
        console.log(err);
        return next();
    }
    res.status(201),json({
        product: product,
    });
}