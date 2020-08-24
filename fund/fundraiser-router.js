const router = require('express').Router();
const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

const restricted = require('../auth/authMiddleware.js');

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    db('projects').where({ id }).first()
        .then(proj => {
            res.status(200).json(car);
        })
        .catch( err => {
            res.status(500).json({ message: 'No projects here'})
        })
});

router.get('/', (req, res) => {
    db('')
})

router.post('/', restricted, (req, res) => {
    const project = req.body;
})

router.put('/', restricted, (req, res) => {

})