const UserService = require('../services/userService');

class UserController{
    static create = async (req, res) =>{
        try{
            const user = await UserService.create(req.body);

            return res.status(201).json({ user });
        }catch(err){
            return res.status(400).json({error: 'Falha ao salvar user' + err})
        }
    }
}

module.exports = UserController