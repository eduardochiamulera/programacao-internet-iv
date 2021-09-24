const TokenService = require('../services/tokenService');

class TokenController{
    static authenticate = async(req, res) => {
        try{
            const { email, password } = req.body;

            if(email === undefined || password === undefined){
                return res.status(400).json({ error: 'Informe o usuário e senha'});
            }

            const token = await TokenService.authenticate({email, password});

            if(!token){
                return res.status(404).json({ error: 'Usuário ou senha incorreto'});
            }

            return res.status(201).json({ auth: true, token: token });
        }catch(err){
            return res.status(400).json({error: 'Falha ' + err})
        }
    }

    static logout = async(req, res) => {
        res.json({ auth: false, token: null });
    }
}

module.exports = TokenController