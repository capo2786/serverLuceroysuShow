
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Reserva').del()
    .then(function () {
      // Inserts seed entries
      return knex('Reserva').insert([
        {
       idReserva: 1,
       idPersona: 1,
        fecha:'10/12/2019',
        hora:'15:30:00',
        sector:'calderon',
        callePrincipal:'progreso',
        calleSecundaria:'vencedores'
        }
    ]);
    });
};
