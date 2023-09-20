const productModel = require("../Models/productModel");


exports.getProductsPage = async(req,res, next)=>{
    const products = await productModel.find({})
    res.render("shopping", {products});
}
exports.getPaymentsPage = async(req,res, next)=>{
    res.render("Payment");
}