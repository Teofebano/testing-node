class UserController {
    constructor(UserService) {
        this.userService = UserService;
    }

    async createUser(req, res) {
        try {
            const newUser = await this.userService.createUser(req.body);

            res.status(201).send(newUser);
        } catch (error) {
            console.log(error)
            res.status(400).send({ error });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.findById(req.params.id);

            res.status(200).send(user);
        } catch (error) {
            res.status(404).send({ error });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await this.userService.findByIdAndUpdate(req.params.id, req.body, { new: true });

            res.status(200).send(updatedUser);
        } catch (error) {
            res.status(400).send({ error });
        }
    }
}

module.exports = UserController;
