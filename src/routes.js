const { Router } = require('express');
const DevController = require('./controller/dev-controller')
const SearchController = require('./controller/search-controller')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 

routes.get('/search', SearchController.index); 


module.exports = routes;