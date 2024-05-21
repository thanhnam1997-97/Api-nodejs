import * as controllers from '../controller/userController'
import express from 'express'
import verifyToken from '../middlewares/verify_token'
import { isAdmin, isModeratorOrAdmin } from '../middlewares/verify_role'

const routes = express.Router()

// Public Routes


// Private Routes
routes.use(verifyToken)
routes.use(isAdmin)
routes.get('/', controllers.geCurrent)

module.exports = routes