const express = require('express');
const router = express.Router();

class HealthRouter {
    constructor(HealthController) {
        this.healthController = HealthController;
        this.router = router;

        this.router.get('/', this.healthController.getHealth);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = HealthRouter;
