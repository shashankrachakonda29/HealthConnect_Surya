import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Expert Care',
      description: 'Our experienced doctors provide personalized treatment plans for optimal health outcomes.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'State-of-the-art facilities with the highest safety standards and patient privacy protection.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services to ensure you get help when you need it most.'
    },
    {
      icon: Users,
      title: 'Family Care',
      description: 'Comprehensive healthcare services for patients of all ages, from pediatrics to geriatrics.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '24/7', label: 'Emergency Care' }
  ]

  const services = [
    'General Medicine',
    'Cardiology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'Emergency Care'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-900 mb-6 leading-tight">
                Your Health is Our
                <span className="text-primary-600"> Priority</span>
              </h1>
              <p className="text-xl text-medical-600 mb-8 leading-relaxed">
                Experience exceptional healthcare with our team of dedicated professionals. 
                We provide comprehensive medical services with compassion and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="btn-primary inline-flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical professionals"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-medical-900">Award Winning</p>
                    <p className="text-sm text-medical-600">Healthcare Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
              Why Choose MediCare+?
            </h2>
            <p className="text-xl text-medical-600 max-w-3xl mx-auto">
              We combine cutting-edge medical technology with compassionate care to deliver 
              the best possible health outcomes for our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">{feature.title}</h3>
                <p className="text-medical-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-medical-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-6">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-lg text-medical-600 mb-8">
                From routine check-ups to specialized treatments, we offer a full range of 
                medical services to keep you and your family healthy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    <span className="text-medical-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn-primary inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical equipment"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment today and experience the difference of personalized, 
            compassionate healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Appointment
            </Link>
            <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home