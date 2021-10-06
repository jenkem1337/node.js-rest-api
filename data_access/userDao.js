const User = require('../entity/user')

class UserDao{
    findAll = async() => {
        return await User.findAll()
    }
    
    addUser = async(firstName, lastName ,email) => {
        return await User.create(
            {
                firstName: firstName,
                lastName: lastName,
                email: email
            })
    }
    
    findById = async (id)=>{
        return await User.findOne({ where: { "id": id }});
    }
    
    updateUserById = async(id,firstName,lastName, email) => {
        return await User.update({ firstName: firstName ,lastName: lastName,email:email  }, {
            where: {
              "id": id
            }
          });
    }
    
    removeUserById = async(id) => {
        return await User.destroy({where:{"id": id}})
    }
    
}




module.exports =  UserDao
