const { user } = require('../app/models');

module.exports = {
    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Creates a new post owned by current user and returns it
     * @todo:
     * - Verify if the user name is already taken
     * - Creat hashed password;
     */
    create: async (req, res) => {
        const { username, password } = req.body;

        try {
            const newUser = await user.create({
                username,
                password_hash: password
            });
    
            return res.send(newUser);            
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Array}
     * @description
     * Finds all users and returns them
     */
    findAll: async (req, res) => {
        try {
            const allUsers = await user.findAll();
            res.send(allUsers);
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Find and return data from the logged in user
     */
    findMe: async (req, res) => {
        try {
            const foundUser = await user.findByPk(req.userId);

            if (!foundUser) {
                return res.status(404).send({ message: 'User not found' });
            }

            res.send(foundUser);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}