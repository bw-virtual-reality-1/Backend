const jwt = require('jsonwebtoken');;

const constants = require('../config/constants.js');


module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, constants.jwtSecret, (error, decodedToken) => {
            if (error){
                res.status(401).json({
                    issue: 'Something went wrong with the token'
                })
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ error: 'you shall not pass! you do not have a token'});
    }
};