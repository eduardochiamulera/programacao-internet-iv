const ProdutoService = require('../services/produtoService');

class ProdutoController{
    static list = async (req, res) => {
        try{
            const produtos = await ProdutoService.list();
    
            return res.json(produtos);
        }catch(err){
            return res.status(400).json({error: 'Falha ao retornar a lista de produtos' + err})
        }
    }

    static findById = async (req, res) => {
        try{
            const produto = await ProdutoService.findById(req.params.id);
            
            if(produto == null)
                return res.status(404).json({ message : 'Produto não encontrado!'})

            return res.json(produto);
        }catch(err){
            return res.status(400).json({error: 'Falha ao retornar a lista de produtos' + err})
        }
    }

    static create = async (req, res) =>{
        try{
            const produto = await ProdutoService.create(req.body);

            return res.status(201).json({ produto });
        }catch(err){
            return res.status(400).json({error: 'Falha ao salvar produto' + err})
        }
    }

    static update = async (req, res) => {
        try{
                const produto = await ProdutoService.update(req.params.id, req.body)
                
            return res.json({produto});
        }catch(err){
            return res.status(400).json({error: 'Falha ao salvar produto' + err})
        }
    }

    static delete = async (req, res) => {
            try{
                await ProdutoService.remove(req.params.id);
                return res.status(204).end();
            }catch(err){
                return res.status(400).json({error: 'Falha ao remover produto' + err})
            }
        }
}


module.exports = ProdutoController