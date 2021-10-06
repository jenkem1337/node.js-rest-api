class UserController{

    constructor(userDao){
        this.userDao = userDao
    }

    findAllUser = async(req,res) => {
        const allUser = await this.userDao.findAll()
        res.send(allUser)
    }
    
    
    findById = async(req,res) => {
        const {id} = req.params
        let idNum = parseInt(id)
        const user = await this.userDao.findById(idNum)
        if(!user){
            res.send({'message': "this user doesnt exist in database"})
        }
        res.send(user)
    }
    
    addUser = async (req,res) => {
        const {firstName,lastName, email} = req.body
        const newUser = await this.userDao.addUser(firstName,lastName, email)
        res.send({"user added to database": newUser})
    
    }
    
    updateUserById = async (req,res) => {
        const {firstName,lastName, email} = req.body
        const {id} = req.params
        let idNum = parseInt(id)
        const user = await this.userDao.findById(idNum)
        
        if(!user){
            res.send({'message': "this user doesnt exist in database"})
        }
    
        const updatedUser = await this.userDao.updateUserById(idNum, firstName,lastName, email)
        res.send({"user updated": updatedUser})
    }
    
    removeUserById = async (req,res) => {
        const {id} = req.params
        let idNum = parseInt(id)
        const user = await this.userDao.findById(idNum)
        
        if(!user){
            res.send({'message': "this user doesnt exist in database"})
        }
    
        await this.userDao.removeUserById(idNum)
        res.send({"user deleted from database": user})
    }
    
}

module.exports = UserController