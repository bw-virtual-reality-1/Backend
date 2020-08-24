const db = require('../database/dbConfig.js');

module.exports = {
    addUser,
    addProject,
    findProjectsById,
    findProjects,
    updateProject,
    findBy
};

function findProjects() {
    return db('projects').select('title').orderBy('projectID');
}


function findProjectsById(id){
    return db('projects').where({ id }).first();
}

function addUser(user) {
    return db('users').insert(user);
}

function addProject(project){
    return db('projects').insert(project);
}

function updateProject(id, updatedProject){
    return db('projects').where('projectID', id).update(updatedProject)
}

function findBy(filter){
    return db('users as u')
        .where(filter)
        .select('u.userID', 'u.username', 'u.password')
        .orderBy('u.userID');
}