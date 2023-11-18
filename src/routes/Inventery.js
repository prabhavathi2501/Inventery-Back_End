import express from 'express'
import Auth from '../common/auth.js'
import InventeryController from '../controller/inventery.js'

const router = express.Router()


router.post('/create',Auth.validate, InventeryController.createProduct)
router.put('/edit/:id',Auth.validate, Auth.adminGaurd,InventeryController.editProduct)
router.get('/:id',Auth.validate,Auth.adminGaurd, InventeryController.  getProductbyId,)
router.put('/status/:id/:status',Auth.validate,Auth.adminGaurd, InventeryController.updateStatus)
router.get('/',Auth.validate,Auth.adminGaurd, InventeryController.getAllProduct)



export default router