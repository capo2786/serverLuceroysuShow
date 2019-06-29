;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.get('/prueba1', pruebaControl.prueba1)
api.post('/prueba1', pruebaControl.prueba1)
api.post('/nuevoRegistro', pruebaControl.nuevoRegistro)
api.post('/update', pruebaControl.update)
api.delete('/eliminarRegistro', pruebaControl.eliminarRegistro)

module.exports = api