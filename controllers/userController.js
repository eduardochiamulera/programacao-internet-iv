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

    static list = async (req, res) => {
        try{
            const user = await UserService.list();
    
            return res.json(user);
        }catch(err){
            return res.status(400).json({error: 'Falha ao retornar a lista de Usuario' + err})
        }
    }

    static findById = async (req, res) => {
        try{
            const user = await UserService.findById(req.params.id);
            
            if(user == null)
                return res.status(404).json({ message : 'Usuario não encontrado!'})

            return res.json(user);
        }catch(err){
            return res.status(400).json({error: 'Falha ao retornar a lista de Usuario' + err})
        }
    }

    static update = async (req, res) => {
        try{
                const user = await UserService.update(req.params.id, req.body)
                
            return res.json({user});
        }catch(err){
            return res.status(400).json({error: 'Falha ao salvar usuario' + err})
        }
    }

    static delete = async (req, res) => {
            try{
                await UserService.remove(req.params.id);
                return res.status(204).end();
            }catch(err){
                return res.status(400).json({error: 'Falha ao remover usuario' + err})
            }
        }
}

module.exports = UserController