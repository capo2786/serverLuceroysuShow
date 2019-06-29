
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('Personas').insert([
        {
       idPersona:'1',
        nombre:'german',
        apellido:'caicedo',
        telefonoUno:'0983085950',
        telefonoDos:'0983085950',
        }
    ]);
    });
};
