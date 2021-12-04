const Produto = require('../model/produto');

class ProdutoService{

    static list() {
        return Produto.find({});
    }

    static async create(entity){
        var prod = await Produto.create(entity);
        console.log("PROD" + prod)
        return prod;
    }

    static findById(id){
        return Produto.findById(id);
    }

    static async update(id, entity){
        var produto = await Produto.updateOne(
            { _id : id}, 
            {$set: { name: entity.name, price: entity.price }}
        );
        
        return this.findById(id);
    }

    static async remove(id){
        var produto = await Produto.remove({ _id : id});
        return produto;
    }
}

module.exports = ProdutoService;