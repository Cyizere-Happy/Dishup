//Dependencies
const express = require('express')
const cors = require('cors')
const config = require('./config/config.js')
const debug = require('debug')('app:server')
const app = express()

//DB Connection & Routes
const connectDB = require('./config/Db.js')
const foodRoute = require('./routes/foodRoute.js')

//MiddleWares
app.use(express.json())
app.use(cors())

//api End-point
app.use('/api/food', foodRoute)

//Starting a server
const startServer = async () => {
    try {
        console.log("Starting server..."); // ✅ Debugging log
        await connectDB();
        console.log("Database connected!"); // ✅ Debugging log
        
        const server = app.listen(config.PORT, () => {
            debug(`Your server is listening on ${config.PORT}`);
            console.log(`Server currently running on port ${config.PORT}`);
        });

        return server;
    } catch (error) {
        console.error("Couldn't start the server:", error);
        process.exit(1);
    }
};
startServer()

