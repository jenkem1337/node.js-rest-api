const UserRouter = require('express').Router()
const userController = require('../controller/userCont')


UserRouter.get('/', userController.findAllUser)
UserRouter.post('/add', userController.addUser)
UserRouter.get('/find/:id/user', userController.findById)
UserRouter.put('/update/:id/user', userController.updateUserById)
UserRouter.delete('/remove/:id/user', userController.removeUserById)


module.exports = {UserRouter}