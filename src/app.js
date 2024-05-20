const express = require('express');
const bodyParser = require('body-parser');

const { initApp } = require('./init');

exports.createApp = async () => {
    const app = express();
    const { userRoutes, healthRoutes } = await initApp();

    app.use(bodyParser.json());

    app.use('/api', userRoutes.getRouter());
    app.use('/health', healthRoutes.getRouter());

    return app;
}
