import express from 'express'
import UserRouter from './user.js'
import InventeryRouter from './Inventery.js'
import DashboardRouter from './dashboard.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send(
        `<h1 className="text-center">welocome to inventery report back_end</h1>`
    )

})
router.use('/user',UserRouter)
router.use('/inventry',InventeryRouter)
router.use('/dashboard',DashboardRouter)
export default router