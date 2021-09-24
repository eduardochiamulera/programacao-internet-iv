const mongoose = require("../database");
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo Obrigatório']
    },
    price: {
        type: Number,
        min : 0.01,
        required: [true, '*Campo Obrigatório']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;