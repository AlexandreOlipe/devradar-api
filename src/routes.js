const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {

    const { github_username } = request.body;

    const res = await axios.get(`https://api.github.com/users/${github_username}`);
    //Aula 2 - 59:57
    console.log(res.data);

    return response.json({message: 'aaaaaaaaaaaa'});
}); 

module.exports = routes;