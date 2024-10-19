const express = require('express');
const router = express.Router();
const { registrarParticipante, obtenerEventosDisponibles, obtenerEventosPorFecha } = require('../controllers/eventosController');

// Registrar un participante en un evento
router.post('/:id/registrar', registrarParticipante);

// Obtener eventos con entradas disponibles
router.get('/disponibles', obtenerEventosDisponibles);

// Obtener eventos por fecha
router.get('/fecha/:fecha', obtenerEventosPorFecha);

module.exports = router;
