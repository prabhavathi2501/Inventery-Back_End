import express from 'express'
import DashboardController from '../controller/dashboard.js'
import Auth from '../common/auth.js'

const router = express.Router()
router.get('/',Auth.validate,DashboardController.getAllProduct)

export default router