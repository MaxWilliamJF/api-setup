const jwt = require('jsonwebtoken')
const { user } = require('../app/models')

module.exports = {
  /**
     * @param {Number} userId
     * @param {Number, String} expirationTime
     * @returns {Object}
     * @description
     * Signs JWT token using user's id and set an expiration time that is configurable
     */
  signJWT: (userId, expirationTime = 3000) => {
    try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: expirationTime })
      return token
    } catch (error) {
      return null
    }
  },

  /**
     * @param {Number} userId
     * @param {Number, String} expirationTime
     * @returns {Object}
     * @description
     * Logs user in based on user and pass received from the request's body
     */

  login: async (req, res) => {
    const { username, password } = req.body

    try {
      const userFromDB = await user.findOne({
        where: {
          username: username,
          password_hash: password
        }
      })

      if (userFromDB) {
        const token = module.exports.signJWT(userFromDB.id)
        res.send({ auth: true, token })
      } else {
        res.send({ auth: false, message: 'Invalid username or password' })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  }
}
