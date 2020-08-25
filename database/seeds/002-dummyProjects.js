
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title: 'Park Funding', 
          description: 'Picking up the trash at the park and asking for donations for funding', 
          userID: 1, 
        },
        {
          title: 'Library Event', 
          description: 'Giving tutoring lessons to younger students', 
          userID: 2, 
        },
        {
          title: 'Recycling Resources', 
          description: 'Going door to door to find old/used tech to be donated', 
          userID: 3, 
        }
      ]);
    });
};
