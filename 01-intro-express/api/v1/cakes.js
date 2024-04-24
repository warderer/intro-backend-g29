const express = require('express');
const router = express.Router();

/* CODIGOS DE ESTADO (STATUS CODES) */
// Los códigos de estado son una CONVENCIÓN, no una regla.
// Por lo que NO ES OBLIGACIÓN seguir las reglas existentes.
// Cada desarrollador puede IMPLEMENTAR sus propias reglas.
// Pero NO ES RECOMENDABLE hacerlo, ya que se pierde la estandarización.

router.get('/api/v1/cakes/:cakeId', (request, response) => {
    const idCake = parseInt(request.params.cakeId);
    if ( idCake > 100 ) {
        response.status(401).send({ message: 'El Pastel esta feo' });
    } else {
        response.status(207).send({ message: 'El Pastel esta bonito' });
    }
});

module.exports = router;