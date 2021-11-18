const {model, Schema} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    organisation:{
        type: String,
        unique: true,
        required: true
    },
    password:{
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