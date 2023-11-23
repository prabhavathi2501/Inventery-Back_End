import ProductModel  from "../models/inventery.js";

const createProduct =async(req,res)=>{
    try {
        const {title,category,price,stock,discription,imageUrl}= req.body
        if(title && category && price,stock,discription,imageUrl)
        {
            await ProductModel.create({
                title,
                imageUrl,
                category,
                price,
               stock,
              
            })
            
            res.status(201).send({
                message:"Product Created Successfully"
            })
        }
       else
       {
        res.status(400).send({
           
            message:"Title, Image Url, Description are required",
        })
    
       }
       
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        }) 
    }
}
const deleteProduct =async(req,res)=>{
    try {
        const inventeryId = req.params.id
        if(inventeryId)
        {
            // const {title,imageUrl,category,price,stock} = req.body
            // let inventery = await ProductModel.findById(inventeryId)
            // inventery.title = title,
            // inventery.imageUrl = imageUrl,
            // inventery.category = category,
            // inventery.price = price,
            // inventery.stock = stock
           

            await ProductModel.findByIdAndDelete(inventeryId)

            res.status(200).send({
                message:"inventery Delete Successfully"
            })
        }
        else
        {
            res.status(400).send({message:"inventery Id Not found"})
        }     
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })  
    }
    }
    const editProduct =async(req,res)=>{
        try {
            const inventeryId = req.params.id
            if(inventeryId)
            {
                const {title,imageUrl,category,price,stock} = req.body
                let inventery = await ProductModel.findById(inventeryId)
                inventery.title = title,
                inventery.imageUrl = imageUrl,
                inventery.category = category,
                inventery.price = price,
                inventery.stock = stock
               
    
                await inventery.save()
    
                res.status(200).send({
                    message:"inventery Edited Successfully"
                })
            }
            else
            {
                res.status(400).send({message:"inventery Id Not found"})
            }     
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"Internal Server Error",
                error:error.message
            })  
        }
        }
    
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
const getProductbyId =async(req,res)=>{
    try {
        const inventeryId = req.params.id
        if(inventeryId)
        {
            let inventery = await ProductModel.findById(req.params.id)
            res.status(200).send({
                message:"Blog Data Fetched Successfully",
                inventery
            })
        }
        else
        {
            res.status(400).send({message:"Inventery Id Not found"})
        }   
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        }) 
    }
}
const updateStatus =async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })  
    }
}


export default{
    createProduct,
    editProduct, 
    getAllProduct,
    getProductbyId,
    updateStatus,
    deleteProduct
}