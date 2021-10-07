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

    static list() {
        return User.find({});
    }

    static findById(id){
        return User.findById(id);
    }

    static async update(id, entity){
        var user = await User.updateOne(
            { _id : id}, 
            {$set: { name: entity.name, email: entity.email, password : entity.password }}
        );
        
        return this.findById(id);
    }

    static async remove(id){
        var user = await User.remove({ _id : id});
        return user;
    }

}

module.exports = UserService;