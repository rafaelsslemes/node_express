const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const basePath = path.join(__dirname, 'templates');

//Routes
const userRoute = require('./user');

// Use an middleware to simulate auth. Similar to design pattern 'decorator'
app.use(authentication);

// Middleware to read request body
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// User route configuration
app.use('/user', userRoute);

// Base route configuration
app.get('/', (request, response) => {
    response.sendFile(basePath + '/index.html');
});



// Start server listening
app.listen(port, ()=>{
    console.log(`Express Server Runing on port ${port}`);
});

function authentication(request, response, next){
    console.log('midlleware authentication executed');
    next();
}