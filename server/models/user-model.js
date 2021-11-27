const {model, Schema} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    denomination_sociale:{
        type: String,
        required: true
    },
    forme_juridique:{
        type: String,
        required: true
    },
    ville:{
        type: String,
        required: true
    },
    adresse:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

UserSchema.plugin(uniqueValidator);

module.exports = model('User', UserSchema);