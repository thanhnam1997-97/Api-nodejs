import * as controllers from '../controller/authController'
import express from 'express'

const routes = express.Router()

routes.post('/register', controllers.register)
routes.post('/login', controllers.login)

module.exports = routes