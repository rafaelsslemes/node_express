const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

const basePath = path.join(__dirname, 'templates');

// Use an middleware to simulate auth. Similar to design pattern 'decorator'
app.use(authentication)

// Base route configuration
app.get('/', (request, response) => {
    response.sendFile(basePath + '/index.html');
});

// User route configuration
app.get('/user/:id', (request, response) => {
    const id = request.params.id;
    console.log(`Select user ID:${id}.`);
    response.sendFile(basePath + '/user.html');
});

app.listen(port, ()=>{
    console.log(`Express Server Runing on port ${port}`);
});

function authentication(request, response, next){
    console.log('midlleware authentication executed');
    next();
}