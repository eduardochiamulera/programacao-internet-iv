const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class TokenService{
   
    static async findUser(user){
        return await User.findOne({ "email" : user.email });
    }

    static async validatePassword(requestPassword, password){
        return await bcrypt.compare(requestPassword, password);
    }

    static generateToken(id){
        return jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
          });
    }

    static async authenticate(user){
        const userDb = await this.findUser(user);

        if(!userDb || !await this.validatePassword(user.password, userDb.password)){
            return null;
        };
        
        const token = this.generateToken(userDb.id);

        return token;
    }
}

module.exports = TokenService;