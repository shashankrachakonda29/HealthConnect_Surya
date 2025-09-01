import React from 'react'
import { Heart, Baby, Bone, Eye, Brain, Stethoscope, Clock, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care services including routine check-ups, preventive care, and treatment of common illnesses.',
      features: ['Annual Physical Exams', 'Chronic Disease Management', 'Preventive Screenings', 'Vaccination Services']
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care including diagnosis and treatment of heart conditions with state-of-the-art technology.',
      features: ['Echocardiograms', 'Stress Testing', 'Cardiac Catheterization', 'Heart Disease Prevention']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with a focus on growth and development.',
      features: ['Well-Child Visits', 'Immunizations', 'Developmental Assessments', 'Pediatric Urgent Care']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert treatment of musculoskeletal conditions including bones, joints, muscles, and ligaments.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care services from routine exams to advanced surgical procedures.',
      features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for disorders of the nervous system including brain, spinal cord, and nerves.',
      features: ['Stroke Care', 'Epilepsy Treatment', 'Memory Disorders', 'Headache Management']
    }
  ]

  const emergencyServices = [
    'Trauma Care',
    'Cardiac Emergencies',
    'Stroke Treatment',
    'Emergency Surgery',
    'Pediatric Emergencies',
    'Critical Care'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services with cutting-edge technology 
            and compassionate care to meet all your medical needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">{service.title}</h3>
                <p className="text-medical-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-medical-700">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-red-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-medical-900">
                  24/7 Emergency Care
                </h2>
              </div>
              <p className="text-lg text-medical-600 mb-6">
                Our emergency department is staffed around the clock with experienced 
                physicians and nurses ready to handle any medical emergency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-red-600" />
                    <span className="text-medical-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
                <p className="text-red-100 mb-3">For life-threatening emergencies, call 911</p>
                <p className="text-lg font-semibold">Emergency Line: (555) 911-HELP</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Emergency room"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
              Advanced Medical Technology
            </h2>
            <p className="text-xl text-medical-600 max-w-3xl mx-auto">
              We invest in the latest medical equipment and technology to provide 
              accurate diagnoses and effective treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-medical-900 mb-2">MRI & CT Scans</h3>
              <p className="text-medical-600">Advanced imaging for accurate diagnosis</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-medical-900 mb-2">Digital X-Ray</h3>
              <p className="text-medical-600">Fast, high-quality imaging with reduced radiation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-medical-900 mb-2">Laboratory Services</h3>
              <p className="text-medical-600">Comprehensive testing with rapid results</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="text-lg font-semibold text-medical-900 mb-2">Telemedicine</h3>
              <p className="text-medical-600">Remote consultations for your convenience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services