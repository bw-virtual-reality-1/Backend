const router = require('express').Router();
const jwt = require('jsonwebtoken');

const bcryptjs = require('bcryptjs');
const { isValid } = require('./authService.js');
const Users = require('./authModel.js');
const constants = require('../config/constants.js');

router.post('/register', (req, res) => {
    const cred = req.body;

    if (isValid(cred)){
        const rounds = process.env.BCRYPT_ROUNDS || 8;

        const hash = bcryptjs.hashSync(cred.password, rounds);

        cred.password = hash;
        Users.add(cred)
            .then(user => {
                res.status(201).json({ data: user })
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            });
    } else {
        res.status(400).json({ message: 'Invalid credentials'})
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)){
    Users.findBy({ username: username })
        .then(([user]) => {
            if (user && bcryptjs.compareSync(password, user.password)){
                const token = signToken(user);
                res.status(200).json({
                    mesage: 'Welcome to the api',
                    token,
                })
            } else {
                res.status(401).json({ message: 'Invalid login'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    } else {
        res.status(400).json({ message: 'Didnt work' })
    }
});

function signToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const secret = constants.jwtSecret;

    const options = {
        expiresIn: '1hr',
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;