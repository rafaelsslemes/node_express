const express = require('express');
const router = express.Router();

const basePath = require('path').join(__dirname, '../templates');

// User route configuration
router.get('/register', (request, response) => {
    response.sendFile(basePath + '/user_register.html');
});

router.post('/register', (request, response) => {
    console.log(request.body);
    response.sendFile(basePath + '/user.html');
});

router.get('/:id', (request, response) => {
    const id = request.params.id;
    console.log(`Select user ID:${id}.`);
    response.sendFile(basePath + '/user.html');
});


module.exports = router;