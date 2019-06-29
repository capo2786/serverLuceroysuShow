
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Servicios').del()
    .then(function () {
      // Inserts seed entries
      return knex('Servicios').insert([
        {
       idServicio: 1,
        nombre:'Lucero y Su Show',
      
        }
    ]);
    });
};
