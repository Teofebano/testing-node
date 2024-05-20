class UserService {
    constructor(UserRepository) {
        this.userRepository = UserRepository;
    }

    async createUser(userData) {
        return await this.userRepository.createUser(userData);
    }

    async getUserById(id) {
        return await this.userRepository.getUserById(id);
    }

    async updateUser(id, userData) {
        return await this.userRepository.updateUser(id, userData);
    }
}

module.exports = UserService;