const express = require('express');
const router = express.Router();

class UserRouter {
    constructor(UserController) {
        this.userController = UserController;

        this.router = router;

        this.router.post('/users', this.userController.createUser.bind(this.userController));
        this.router.get('/users/:id', this.userController.getUserById.bind(this.userController));
        this.router.patch('/users/:id', this.userController.updateUser.bind(this.userController));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = UserRouter;
