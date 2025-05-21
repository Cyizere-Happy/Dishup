const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
       type: String,
       require: [true, 'Name of the food required'],
       unique: true,
       trim: true,
       lowercase: true
    },
    description: {
        type: String,
        require: [true, 'Description is always Essentinal']
    } ,
    price: {
        type: String,
        require: [true, 'Price is required']
    },
    image: {
        type: String,
        require: [true, 'Let the user see what they\'re buying']
    },
    category: {
        type: String,
        require: [true, 'Place the Category plz']
    }
}, {
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema)

module.exports = foodModel