const express = require('express');
const db = require('./models/index')
const { PORT } = require('./config/configServer')
const app = express();

const setupAndStartServer = async() => {

    app.listen(PORT, ()=>{
        console.log(`server started at: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    })
}
setupAndStartServer();