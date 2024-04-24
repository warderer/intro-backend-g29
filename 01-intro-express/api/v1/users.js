const express = require('express');
const router = express.Router();

/* POST */
// El Post tiene la habilidad de poder enviar algo al servidor.
// En este caso a través del BODY del request.

router.post('/api/v1/users', (request, response) => {
    console.log('Body de PostUser:', request.body);
    response.status(201).send({ message: 'User created', data: request.body });
});


module.exports = router;