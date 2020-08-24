const router = require('express').Router();
const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

const restricted = require('../auth/authMiddleware.js');
const Info = require('../auth/authModel.js');


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



router.post('/', restricted, (req, res) => {
    const project = req.body;

    Info.addProject(project)
    .then(proj => {
        res.status(200).json(proj);
    })
    .catch(err => {
        res.status(500).json({ message: 'No project added'})
    })
})

router.put('/project/:id', restricted, (req, res) => {
    let { id } = req.params;
    let subject = req.jwt.subject;
    let changes = req.body;

    Info.findProjectsById(id)
    .then(update => {
        if (update){
            if(update.projectID === subject) {
                Info.updateProject(id, changes)
                    .then(count => {
                        if (count === 1){
                            Info.findProjectsById(id)
                            .then(updatedProj => {
                                res.status(200).json({ success:`successfully updated project with id ${id}`, update: updatedProj })
                            })
                            .catch(err => {
                                res.status(500).json({ errorMessage: 'Server error updating projects'})
                            })
                        } else {
                            res.status(400).json({ errorMessage: 'Could not update project'})
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ errorMessage: 'Server error updating projects'})
                    })
            } else {
                res.status(401).json({ errorMessage: 'This project is not made by this individual'})
            }
        } else{
            res.status(404).json({ errorMessage: 'No project with the requested ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Server error finding project'})
    })

})