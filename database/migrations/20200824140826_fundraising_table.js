
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('userID');
        tbl.string('firstName').notNullable();
        tbl.string('lastName').notNullable();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('email').notNullable().unique();
        tbl.integer('role').notNullable();
    })
    .createTable('projects', tbl => {
        tbl.increments('projectID');
        tbl.string('title').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('userID').unsigned().references('userID').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects').dropTableIfExists('users');
};
