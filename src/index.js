const express = require('express');

const { PORT } = require('./config/configServer')
const app = express();

const setupAndStartServer = async() => {

    app.listen(PORT, ()=>{
        console.log(`server started at: ${PORT}`)
    })
}
setupAndStartServer();