const userModel = require('../Models/User.js')
const userRole = require('../Models/UserRole.js')
const bcrypt = require('bcrypt')
const joi = require('joi')
const debug = require('debug')('app:UserController')

const userSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().minlength(6).required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    status: joi.string().valid('active','inactive'),
    role: joi.string().required()
})

const Register = async function(req,res){
    const { error } = userSchema.validate(req.body)
    if(error) return res.status(400).json({ message: error.details[0].message })
    try{
        const role = await userRole.findById(req.body.role)
        if(!role) return res.status(400).json({message: 'Invalid Role'})
        
        const user = new userModel(req.body)
        await user.save()
    }
    
}
