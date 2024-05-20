const User = require('../models/userModel');

class UserRepository {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }
}

module.exports = UserRepository;