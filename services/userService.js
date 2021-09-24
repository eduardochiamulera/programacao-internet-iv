const User = require('../model/user');
const bcrypt = require('bcryptjs');

class UserService{
    
    static async create(entity){
        let user = await findUser(entity);
        if(user != null){
            return { erro : "Usuário já existe no banco" };
        }

        return User.create(entity);
    }

    static async findUser(user){
        return await User.findOne({ "email" : user.email });
    }

}

module.exports = UserService;