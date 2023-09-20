const productModel = require("../Models/productModel")
const cloudinary = require('cloudinary').v2
exports.createProduct = async(req,res, next)=>{
    const file = req.file
    const result = await cloudinary.uploader.upload(file.path, {resource_type: 'auto'})
    const newProduct = await productModel.create({
        name: req.body.name,
        image: result.secure_url,
        price: req.body.price,
    })
    res.status(200).json({
        newProduct
    })
}