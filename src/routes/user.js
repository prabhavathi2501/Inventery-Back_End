import express from 'express'
import UserController from '../controller/users.js'
const router = express.Router()

router.post('/signup',UserController.create)
router.post('/login',UserController.login)
router.get('/',UserController.getUsers)

// router.get('/',(req,res)=>{
//     res.status(200).send(
//         `<h1 className="text-center">welocome to inventery report user back_end</h1>`
//     )
// })
export default router