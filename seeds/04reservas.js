
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ReservaServicio').del()
    .then(function () {
      // Inserts seed entries
      return knex('ReservaServicio').insert([
        {
       idReservaServicio:1,
       idPersona:1,
       idReserva:1,
       idServicio:1,
        }
    ]);
    });
};
