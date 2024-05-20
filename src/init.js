const mongoose = require('mongoose');

const HealthController = require("./controllers/healthController");
const UserController = require("./controllers/userController");

const UserRepository = require("./repositories/userRepository");

const HealthRouter = require("./routes/healthRoute");
const UserRouter = require("./routes/userRoute");

const UserService = require("./services/userService")

exports.initApp = async () => {
    const userRepository = new UserRepository();

    const userService = new UserService(userRepository);

    const userController = new UserController(userService);
    const healthController = new HealthController();

    const userRoutes = new UserRouter(userController);
    const healthRoutes = new HealthRouter(healthController);

    await mongoose.connect('mongodb://localhost:27017/testing_node')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log('MongoDB connection error:', err));

    return { userRoutes, healthRoutes }
}
