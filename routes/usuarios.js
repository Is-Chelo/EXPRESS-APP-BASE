

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/Usuarios')


router.get('/', usuariosController.usuariosGet)
router.put('/:id', usuariosController.usuariosPut)
router.post('/', usuariosController.usuariosPost)
router.delete('/:id', usuariosController.usuariosDelete)



module.exports = router