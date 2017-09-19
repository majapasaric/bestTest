/**
 * Created by mpasaric on 17.2.2017..
 */
const dotenv = require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.SEQUELIZE_DIALECT,
        define: {
            underscored: false
        }
    }
};