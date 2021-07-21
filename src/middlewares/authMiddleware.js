const jwt = require('jsonwebtoken');

module.exports = {
    verifyJWT: (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send({
                        message: 'Failed to authenticate token.'
                    });
                }

                req.userId = decoded.userId;
                next();
            });
        } else {
            return res.status(401).send({
                message: 'Token not provided.'
            });
        }
    }
}