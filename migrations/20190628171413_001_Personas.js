exports.up = function(knex, Promise) {
    return knex.schema.createTable('Personas', function(table) {
      table.increments('idPersona');
      table.string('nombre').notNullable();
      table.string('apellido').notNullable();
      table.string('telefonoUno').notNullable();
      table.string('telefonoDos').notNullable();
    })
    .createTable('Servicios', function(table) {
      table.increments('idServicio');
      table.string('nombre').notNullable();
    
      })
    
    .createTable('Reserva', function(table) {
      table.increments('idReserva');
      table.date('fecha');
      table.time('hora');
      table.string('sector').notNullable();
      table.string('callePrincipal').notNullable();
      table.string('calleSecundaria').notNullable();
      table.integer('idPersona').references('idPersona').inTable('Personas');
    
    })
    .createTable('ReservaServicio', function(table) {
        table.increments('idReservaServicio');
        table.integer('idPersona').references('idPersona').inTable('Personas');
        table.integer('idReserva').references('idReserva').inTable('Reserva');
        table.integer('idServicio').references('idServicio').inTable('Servicios');
      })
   };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Personas').dropTable('Servicios').dropTable('Reservas').dropTable('Direccion');
  };