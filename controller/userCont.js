const userDao = require('../data_access/userDao')

const findAllUser = async(req,res) => {
    const allUser = await userDao.findAll()
    res.send(allUser)
}


const findById = async(req,res) => {
    const {id} = req.params
    let idNum = parseInt(id)
    const user = await userDao.findById(idNum)
    if(!user){
        res.send({'message': "this user doesnt exist in database"})
    }
    res.send(user)
}

const addUser = async (req,res) => {
    const {firstName,lastName, email} = req.body
    const newUser = await userDao.addUser(firstName,lastName, email)
    res.send({"user added to database": newUser})

}

const updateUserById = async (req,res) => {
    const {firstName,lastName, email} = req.body
    const {id} = req.params
    let idNum = parseInt(id)
    const user = await userDao.findById(idNum)
    
    if(!user){
        res.send({'message': "this user doesnt exist in database"})
    }

    const updatedUser = await userDao.updateUserById(idNum, firstName,lastName, email)
    res.send({"user updated": updatedUser})
}

const removeUserById = async (req,res) => {
    const {id} = req.params
    let idNum = parseInt(id)
    const user = await userDao.findById(idNum)
    
    if(!user){
        res.send({'message': "this user doesnt exist in database"})
    }

    await userDao.removeUserById(idNum)
    res.send({"user deleted from database": user})
}

module.exports = {
    findAllUser,
    findById,
    addUser,
    updateUserById,
    removeUserById,
}