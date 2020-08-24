const router = require('express').Router();
const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

const restricted = require('../auth/authMiddleware.js')

const Info = require('../auth/authModel.js');

router.get('/', restricted, (req, res) => {
    // Return list of projects available from the db

    db('projects')
        .then(info => {
            res.status(200).json({ info })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;