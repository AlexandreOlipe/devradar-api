const Dev = require('./dev-controller');

module.exports = {
    async index(request, response) {
        Dev.index
        return response.json("afsdgfs");
    }
}