const mongoose = require('mongoose');
const bycrypt = require('bycrypt')

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            minlength: [6, 'Password should be longer than 6 characters'],
            required: [true, 'Password is required'],
        },
        firstName: {
            type: String,
            required: [true, 'Please provide your first name'],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, 'Please provide your last name'],
            trim: true,
        },
        status: {
            type: String,
            enum: {
                values: ['active', 'inactive'],
                message: 'Invalid status, must be "active" or "inactive".',
            },
            default: 'active',
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: [true, 'User Role is required'],
        },
    },
    { timestamps: true,
      toJSON: {virtuals: true},
      toObject: {virtuals: true}
    }
);
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    try{
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }catch(error){
        next(error)
    }
})

userSchema.methods.comparePassword = async function(comparePassword){
    return await bcrypt.compare(comparePassword, this.password)
}
module.exports = mongoose.model('User', userSchema);
