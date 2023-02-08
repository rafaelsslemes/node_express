const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

const basePath = path.join(__dirname, 'templates');

app.get('/', (request, response) => {

    response.sendFile(basePath + '/index.html');

});

app.listen(port, ()=>{
    console.log(`Express Server Runing on port ${port}`);
});