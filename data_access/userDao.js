const User = require('../entity/user')


const findAll = async() => {
    return await User.findAll()
}

const addUser = async(firstName, lastName ,email) => {
    return await User.create(
        {
            firstName: firstName,
            lastName: lastName,
            email: email
        })
}

const findById = async (id)=>{
    return await User.findOne({ where: { "id": id }});
}

const updateUserById = async(id,firstName,lastName, email) => {
    return await User.update({ firstName: firstName ,lastName: lastName,email:email  }, {
        where: {
          "id": id
        }
      });
}

const removeUserById = async(id) => {
    return await User.destroy({where:{"id": id}})
}



module.exports = {findById, findAll, addUser, updateUserById, removeUserById,}