import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react'
import axios from 'axios'
import api from '../api/axios'

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    doctor: '',
    department: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    insurance: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
   await api.post('/appointments', formData)
    // await axios.post('http://localhost:5000/api/appointments', formData)
    alert('Your appointment has been requested!')
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      doctor: '',
      department: '',
      appointmentDate: '',
      appointmentTime: '',
      reason: '',
      insurance: '',
      notes: ''
    })
  } catch (error) {
    console.error('Submit error:', error)
    alert('Error submitting form. Try again.')
  }
  }
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log('Appointment booked:', formData)
  //   alert('Your appointment has been requested! We will contact you shortly to confirm.')
  //   // Reset form
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     dateOfBirth: '',
  //     gender: '',
  //     doctor: '',
  //     department: '',
  //     appointmentDate: '',
  //     appointmentTime: '',
  //     reason: '',
  //     insurance: '',
  //     notes: ''
  //   })
  // }

  const doctors = [
    'Dr. Sarah Johnson - Internal Medicine',
    'Dr. Michael Chen - Cardiology',
    'Dr. Emily Rodriguez - Pediatrics',
    'Dr. James Wilson - Orthopedic Surgery',
    'Dr. Lisa Thompson - Dermatology',
    'Dr. Robert Kim - Emergency Medicine'
  ]

  const departments = [
    'Internal Medicine',
    'Cardiology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'Emergency Medicine',
    'Neurology',
    'Ophthalmology'
  ]

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
            Book an Appointment
          </h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            Schedule your visit with our expert healthcare professionals. 
            We're here to provide you with the best medical care.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-8">
              <Calendar className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-medical-900">Appointment Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-medical-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-medical-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-medical-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-medical-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-medical-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-medical-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary-600" />
                  Appointment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-medical-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-medical-700 mb-2">
                      Preferred Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Any available doctor</option>
                      {doctors.map((doctor, index) => (
                        <option key={index} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-medical-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="appointmentTime" className="block text-sm font-medium text-medical-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary-600" />
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-medical-700 mb-2">
                      Reason for Visit *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select reason</option>
                      <option value="routine-checkup">Routine Check-up</option>
                      <option value="follow-up">Follow-up Visit</option>
                      <option value="new-symptoms">New Symptoms</option>
                      <option value="chronic-condition">Chronic Condition Management</option>
                      <option value="preventive-care">Preventive Care</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-medical-700 mb-2">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., Blue Cross Blue Shield"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-medical-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Please provide any additional information about your symptoms, concerns, or special requirements..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </button>
                <p className="text-sm text-medical-600 text-center mt-4">
                  * Required fields. We will contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-medical-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-medical-900 mb-4">
              Need Help Booking?
            </h2>
            <p className="text-medical-600">
              Our friendly staff is available to assist you with scheduling your appointment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-medical-900 mb-2">Call Us</h3>
              <p className="text-medical-600">(555) 123-4567</p>
              <p className="text-sm text-medical-500">Mon-Fri: 8AM-6PM</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-medical-900 mb-2">Email Us</h3>
              <p className="text-medical-600">appointments@medicareplus.com</p>
              <p className="text-sm text-medical-500">We respond within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-medical-900 mb-2">Emergency</h3>
              <p className="text-medical-600">(555) 911-HELP</p>
              <p className="text-sm text-medical-500">24/7 Emergency Care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment