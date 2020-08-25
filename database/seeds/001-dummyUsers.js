
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Rocky',
          lastName: 'Balboa', 
          username: 'champion', 
          password: 'america', 
          email: 'slyvester@stallone.com', 
          role: 1
        },
        {
          firstName: 'Ivan', 
          lastName: 'Dragic', 
          username: 'russian', 
          password: 'soviet', 
          email: 'bigman@boxer.com', 
          role: 2
        },
        {
          firstName: 'Steve', 
          lastName: 'Rogers', 
          username: 'BestAvenger', 
          password: 'american', 
          email: 'captain@america.com', 
          role: 2
        },

      ]);
    });
};
