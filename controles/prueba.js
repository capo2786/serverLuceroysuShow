;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let prueba = (req, res) => {
    let tabla = req.body.tabla
    let campo = req.body.campo
    db.select(campo).from(tabla)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let prueba1 = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK21"
    })
}


let nuevoRegistro = (req, res) => {
    let tabla = req.body.tabla
    let registro = JSON.parse(req.body.registro)
    db(tabla)/*returning('id', 'descripcion')*/
    .insert(registro)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let update = (req, res) => {
    let tabla = req.body.tabla
    let condicion2 = JSON.parse(req.body.campo)
    db(tabla)
    .where(condicion2).update({})
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado,
            mensaje: `Existen ${resultado.length} regisros en la consulta`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

let eliminarRegistro = (req, res) => {
    let tabla = req.body.tabla
    let condicion = JSON.parse(req.body.condicion)
    db(tabla)
    .where(condicion[0], condicion[1], condicion[2]).del()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            mensaje: `Se elminaron ${resultado} regisros`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            mensaje: `Error del servidor: ${error}`
        })
    })
}

module.exports = {
    prueba,
    prueba1,
    nuevoRegistro,
    update,
    eliminarRegistro
}