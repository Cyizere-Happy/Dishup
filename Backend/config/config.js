require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5790,
    Mongo_URL: process.env.MONGO_URL
};

module.exports = config;
