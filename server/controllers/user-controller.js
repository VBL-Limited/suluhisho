const User =  require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signUp = async(req,  res, next) => {

    try {

        const { name, email, mobile, organisation, password } = req.body;
        
        // crypt the password
        await bcrypt.hash(password, 16)
            .then(async (hash) => {
                // create a user
                const newUser = new User({
                    name,
                    email,
                    mobile,
                    organisation,
                    password: hash,
                });
                
                const saveUser = await newUser.save();
                return res.status(201).json({
                    message: saveUser,
                    success: true
                });

            }).catch(err => res.status(500).json({
                message: err.message,
                success: false
            }));
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            success: false
        });
    }    
}

exports.login = async (req, res, next) => {

    try {
        // body
        const { email, password } = req.body;

        // find user
        const user = await User.find({ email });

        if(!user){
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }
        
        // compare passwords
        bcrypt.compare(password, user.password)
            .then((valid) => {

                if(!valid) {
                    return res.status(401).json({
                        message: 'Mot de passe incorrect',
                        success: false
                    });
                }

                // password is correct, return created token
                return res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        {userId: user._id},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn: '24h'}
                    )
                });
            }).catch(err => res.status(500).json({
                message: err.message,
                success: false
            }));
    } catch (error) {
        return res.status(401).json({
            message: error.message,
            success: false
        });
    }

}