const Dev = require('../model/dev');

module.exports = {
    async index(request, response) {
        
        const { latitude, longitude, techs } = request.query;

        console.log(techs);

        const devs = await Dev.find({
            techs: {
                $in: techs,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // 10km
                }
            }
        });

        return response.json(devs);
    }
}