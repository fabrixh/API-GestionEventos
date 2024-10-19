const Evento = require('../models/evento');

// Registrar un participante en un evento
const registrarParticipante = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  try {
    const evento = await Evento.findById(id);

    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });
    if (evento.entradasDisponibles <= 0) return res.status(400).json({ message: 'No hay entradas disponibles' });

    evento.participantes.push({ nombre, email });
    evento.entradasDisponibles -= 1;
    await evento.save();

    res.status(201).json({ message: 'Participante registrado', evento });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar participante', error });
  }
};

// Obtener eventos con entradas disponibles
const obtenerEventosDisponibles = async (req, res) => {
  try {
    const eventos = await Evento.find({ entradasDisponibles: { $gt: 0 } });
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos', error });
  }
};

// Obtener eventos por fecha
const obtenerEventosPorFecha = async (req, res) => {
  const { fecha } = req.params;
  const fechaInicio = new Date(fecha);
  const fechaFin = new Date(fecha);
  fechaFin.setDate(fechaFin.getDate() + 1);

  try {
    const eventos = await Evento.find({ fecha: { $gte: fechaInicio, $lt: fechaFin } });
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos', error });
  }
};

module.exports = { registrarParticipante, obtenerEventosDisponibles, obtenerEventosPorFecha };
