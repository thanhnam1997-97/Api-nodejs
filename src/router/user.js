const user = require('../controller/userController');
const routes = require('express').Router()

routes.get('/', user.getUsers)

module.exports = routes