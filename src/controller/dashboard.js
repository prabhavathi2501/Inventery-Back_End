import ProductModel from "../models/inventery.js";
const getAllProduct =async(req,res)=>{
    try {
        let inventery= await ProductModel.find({}) 
       res.status(200).send({
      message:"get all products",
      inventery
       })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })  
    }
}
export default {
    getAllProduct
}