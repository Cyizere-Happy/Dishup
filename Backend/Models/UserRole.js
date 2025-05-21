const mongoose = require('mongoose')

const userRoleSchema = mongoose.Schema({
    name:{
        type:String,
        enum:{
            values: ['admin','user'],
            message: 'Invalid Role Entered'
        },
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

module.exports = mongoose.model('Role', userRoleSchema)