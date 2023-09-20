const User = require("../Models/userModel");
exports.SignUp = async(req, res, next)=>{
    const {name, email, password, confirmPassword} = req.body
    if(!name || !email || !password || !confirmPassword ){
        return next(new AppError("mongoose"));
    }
}