const mongoose = require("../database");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo Obrigatório']
    },
    email: {
        type: String,
        required: [true, '*Campo Obrigatório']
    },
    password: {
        type: String,
        required: [true, '*Campo Obrigatório']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;