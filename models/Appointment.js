import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateOfBirth: String,
  gender: String,
  doctor: String,
  department: String,
  appointmentDate: String,
  appointmentTime: String,
  reason: String,
  insurance: String,
  notes: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
