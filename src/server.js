const { createApp } = require('./app');

const port = process.env.PORT || 3000;

(async () => {
    try {
        const app = await createApp();

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
})()