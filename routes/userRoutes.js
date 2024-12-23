const UserController = require('../controller/usersController');

module.exports = (app) => {
    app.get('/api/users/getAll', UserController.getAll);


    app.post('/apt/users/create', UserController.register);
    app.post('/apt/users/login', UserController.login);
}