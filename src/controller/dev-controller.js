const axios = require('axios');
const Dev = require('../model/dev');

// Possiveis funções em um controller (paralelo com verbos HTTP, para facilitar)
// index(GET list), show(GET one), store(POST), update(PUT), destroy(DELETE)

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;
    
        let dbDev = await Dev.findOne({ github_username });

        if(!dbDev){
            const res = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = res.data;
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dbDev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs,
                location,
            });
        }
        
        return response.json(dbDev);
    }
}