import React from 'react'
import { Star, Award, Calendar, MapPin } from 'lucide-react'

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      rating: 4.9,
      reviews: 127,
      bio: 'Dr. Johnson specializes in preventive care and chronic disease management. She is passionate about helping patients achieve optimal health through personalized treatment plans.',
      languages: ['English', 'Spanish'],
      certifications: ['Board Certified Internal Medicine', 'Advanced Cardiac Life Support']
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '20+ years',
      education: 'MD, Johns Hopkins University',
      rating: 4.8,
      reviews: 89,
      bio: 'Dr. Chen is a leading cardiologist with expertise in interventional procedures and heart disease prevention. He has performed over 2,000 cardiac procedures.',
      languages: ['English', 'Mandarin'],
      certifications: ['Board Certified Cardiology', 'Interventional Cardiology Fellowship']
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12+ years',
      education: 'MD, Stanford University',
      rating: 4.9,
      reviews: 156,
      bio: 'Dr. Rodriguez is dedicated to providing comprehensive pediatric care from newborns to adolescents. She focuses on developmental milestones and preventive care.',
      languages: ['English', 'Spanish', 'Portuguese'],
      certifications: ['Board Certified Pediatrics', 'Pediatric Advanced Life Support']
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgery',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '18+ years',
      education: 'MD, Mayo Clinic',
      rating: 4.7,
      reviews: 94,
      bio: 'Dr. Wilson specializes in joint replacement and sports medicine. He has helped thousands of patients regain mobility and return to active lifestyles.',
      languages: ['English'],
      certifications: ['Board Certified Orthopedic Surgery', 'Sports Medicine Fellowship']
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Dermatology',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10+ years',
      education: 'MD, UCLA Medical School',
      rating: 4.8,
      reviews: 112,
      bio: 'Dr. Thompson provides comprehensive dermatological care including medical, surgical, and cosmetic dermatology with a focus on skin cancer prevention.',
      languages: ['English', 'French'],
      certifications: ['Board Certified Dermatology', 'Mohs Surgery Fellowship']
    },
    {
      name: 'Dr. Robert Kim',
      specialty: 'Emergency Medicine',
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '14+ years',
      education: 'MD, University of Pennsylvania',
      rating: 4.6,
      reviews: 78,
      bio: 'Dr. Kim leads our emergency department with expertise in trauma care and critical medicine. He is available 24/7 for emergency consultations.',
      languages: ['English', 'Korean'],
      certifications: ['Board Certified Emergency Medicine', 'Advanced Trauma Life Support']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
            Meet Our Expert Doctors
          </h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            Our team of board-certified physicians brings together decades of experience 
            and expertise to provide exceptional healthcare services.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medical-900 mb-1">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{doctor.specialty}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-medical-600 mb-4">
                    <span>{doctor.experience}</span>
                    <span>•</span>
                    <span>{doctor.reviews} reviews</span>
                  </div>
                  
                  <p className="text-medical-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-medical-700">
                      <Award className="h-4 w-4 mr-2 text-primary-600" />
                      {doctor.education}
                    </div>
                    <div className="flex items-center text-sm text-medical-700">
                      <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                      Languages: {doctor.languages.join(', ')}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="section-padding bg-medical-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-medical-600 max-w-3xl mx-auto">
              Our doctors cover a wide range of medical specialties to provide 
              comprehensive healthcare for you and your family.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Internal Medicine',
              'Cardiology',
              'Pediatrics',
              'Orthopedics',
              'Dermatology',
              'Emergency Medicine',
              'Neurology',
              'Ophthalmology',
              'Psychiatry',
              'Radiology',
              'Surgery',
              'Urology'
            ].map((specialty, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow duration-200">
                <p className="text-medical-700 font-medium">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Appointment Today
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our experienced doctors are ready to provide you with personalized, 
            compassionate care. Book your appointment online or call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Online
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctors