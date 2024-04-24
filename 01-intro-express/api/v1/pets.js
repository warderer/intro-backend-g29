const express = require('express');
const router = express.Router();

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

// router.get('/api/v1/pets', (request, response) => {
//     response.send(petList);
// });

/* PARAMS */
// Obtener parámetros de la URL (dinámicos)
// Params: '/api/v1/pets/:petId'
router.get('/api/v1/pets/:petId', (request, response) => {
    console.log('Params de GetOnePet:', request.params.petId);
    // recorrer el arreglo de pets y devolver el que coincida con el id
    const onePet = petList.pets.find(pet => pet.id === parseInt(request.params.petId)); // Si la ID del pet existe, devolvera un objeto (true), si no, devolvera undefined (false)

    onePet
      ? response.status(200).send(onePet)
      : response.status(404).send({ message: 'Pet not found'});
});

/* QUERY */
// Query: '/api/v1/pets?age=2&type=cat'
// Las Querys son similares a Params, pero se suelen usar para filtrar información de uno o más datos.
// Las Querys son ABIERTAS, no definimos cuantas querys pueden existir, ni como se llaman. Por lo que es importante validar que la query que estamos buscando exista.
router.get('/api/v1/pets', (request, response) => {
    console.log('Query de GetPets:', request.query);
    const { age, type } = request.query;
    let filteredPets = petList.pets;

    if (age) {
        filteredPets = filteredPets.filter(pet => pet.age === parseInt(age));
    }

    if (type) {
        filteredPets = filteredPets.filter(pet => pet.type === type);
    }

    response.status(200).send({ pets: filteredPets });
});

module.exports = router;