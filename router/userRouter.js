const UserRouter = require('express').Router()
const UserController = require('../controller/userCont')
const UserDao = require('../data_access/userDao')


const userController = new UserController(new UserDao())

UserRouter.get('/', (req,res) => userController.findAllUser(req,res))
UserRouter.post('/add', (req, res) => userController.addUser(req,res))
UserRouter.get('/find/:id/user', (req, res) => userController.findById(req, res))
UserRouter.put('/update/:id/user', (req,res) => userController.updateUserById(req,res))
UserRouter.delete('/remove/:id/user', (req,res)=> userController.removeUserById(req,res))


module.exports = {UserRouter}