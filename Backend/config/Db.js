const mongoose = require('mongoose')
const config = require('./config.js')
const debug = require('debug')('app:Db')

const connectDB = async ()=>{
    try{
        const mongooseOptions = {
           serverSelectionTimeoutMS: 5000,
           socketTimeoutMS: 4500,
           family: 4
        }
        await mongoose.connect(config.Mongo_URL, mongooseOptions)

        //Envent Handler
        mongoose.connection.on('disconnect', ()=>{
            debug('Database Disconnected')
        })
        mongoose.connection.on('error', (err)=>{
            debug('Something went wrong', err)
            process.exit(1)
        })
        mongoose.connection.on('connected',()=>{
            debug('Database Connected Successfully')
        })

        //CTRL + C pressed
        process.on('SIGINT',async()=>{
            await mongoose.connection.close()
            debug('CTRL+C was pressed bye...')
            process.exit(0)
        })
    }catch(error){
        debug('Something went wrong', error)
        process.exit(1)
    }
}

mongoose.set('strictQuery',true)
mongoose.set('toJSON',{
    virtuals: true,
    transform: (doc,rec)=>{
        rec.id = rec._id
        delete rec._id
        delete rec.__v
        return rec
    }
})

module.exports = connectDB