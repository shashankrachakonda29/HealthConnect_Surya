import express from 'express';
import Appointment from '../models/Appointment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log("in")
  debugger
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save appointment' });
  }
});

export default router;
