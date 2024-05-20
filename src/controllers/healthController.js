class HealthController {
    async getHealth(req, res) {
        res.status(200).send({
            status: 'OK'
        });
    }
}

module.exports = HealthController;
