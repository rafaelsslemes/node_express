import express from 'express';

const app = express();
const port = 8080;

app.get('/', (request, response) => {

    response.send('Welcome to Express Server');

});

app.listen(port, ()=>{
    console.log(`Express Server Runing on port ${port}`);
});