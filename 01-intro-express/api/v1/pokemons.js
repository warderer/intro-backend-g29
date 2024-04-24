const express = require('express');
const router = express.Router();
const axios = require('axios');

// APIs que consumen otras APIs
// Por ejemplo la pokéAPI
const BASE_URL = 'https://pokeapi.co/api/v2'

// http://localhost:3000/api/v1/pokemons?count=10
router.get('/api/v1/pokemons', async (req, res) => {
    pokemonCount = req.query.count || 10;
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?limit=${pokemonCount}`);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(404).send(error);
    }
});




module.exports = router;