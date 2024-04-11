const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
    address: {type:String, required: true, unique:true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    password: {type: String, required: true},
    contracts: { type: Array, default: [] } 
    },
    { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model