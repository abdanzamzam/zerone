const routes = require('express').Router();
const user = require('./user');

routes.get('/', (req, res) => {
     res.send('On Air...');
});

routes.use('/user', user)

module.exports = routes;