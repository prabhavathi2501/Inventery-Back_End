import mongoose from "./index.js";
// import { Status } from "../common/utils.js";

const ProductSchema = new mongoose.Schema({
    title:{type:String,required:[true,"title is required"]},
    imageUrl:{type:String,required:[true,"Image url is required"]},
    category:{type:String,required:[true,"category is required"]},
    price:{type:Number,required:[true,"Price is required"]},
    stock:{type:Number,required:[true,"stock is requried"]},
   
    description:{type:String}
    
    // status:{type:String,default:Status.PENDING},
    // createdBy:{type:String,required:[true,"Created By is required"]},
    // approvedBy:{type:String},
    // modifiedAt:{type:Date},
    // createdAt:{type:Date, default:Date.now()}
},{
    collection:'Inventery',
    versionKey:false
})

const ProductModel = mongoose.model('Inventery',ProductSchema)
export default ProductModel