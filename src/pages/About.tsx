import React from 'react'
import { Award, Users, Heart, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and understanding, ensuring comfort throughout their healthcare journey.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical care through continuous learning and state-of-the-art technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Our multidisciplinary team works together to provide comprehensive, coordinated care for optimal outcomes.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical advances and innovative treatments to provide the best possible care.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
              About MediCare+
            </h1>
            <p className="text-xl text-medical-600 max-w-3xl mx-auto">
              For over 15 years, we've been dedicated to providing exceptional healthcare 
              services to our community with compassion, expertise, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-medical-600 mb-6">
                Founded in 2009, MediCare+ began with a simple mission: to provide accessible, 
                high-quality healthcare to everyone in our community. What started as a small 
                clinic has grown into a comprehensive medical center serving thousands of patients.
              </p>
              <p className="text-lg text-medical-600 mb-6">
                Our journey has been marked by continuous growth, innovation, and an unwavering 
                commitment to patient care. We've expanded our services, welcomed talented 
                healthcare professionals, and invested in cutting-edge medical technology.
              </p>
              <p className="text-lg text-medical-600">
                Today, we're proud to be a trusted healthcare partner for families throughout 
                the region, offering everything from routine check-ups to specialized treatments 
                and emergency care.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical facility"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-medical-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-medical-900 mb-4">Our Mission</h3>
              <p className="text-medical-600 text-lg">
                To provide exceptional, compassionate healthcare services that improve the 
                health and well-being of our patients and community. We are committed to 
                delivering personalized care with the highest standards of medical excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-medical-900 mb-4">Our Vision</h3>
              <p className="text-medical-600 text-lg">
                To be the leading healthcare provider in our region, recognized for our 
                innovative treatments, exceptional patient experience, and positive impact 
                on community health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-medical-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the way 
              we care for our patients and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">{value.title}</h3>
                <p className="text-medical-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of medical expertise 
            and healthcare management experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dr. Sarah Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-primary-100 mb-2">Chief Medical Officer</p>
              <p className="text-sm text-primary-200">
                25+ years in internal medicine and healthcare administration
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dr. Michael Chen"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
              <p className="text-primary-100 mb-2">Director of Cardiology</p>
              <p className="text-sm text-primary-200">
                Board-certified cardiologist with expertise in interventional procedures
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dr. Emily Rodriguez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-primary-100 mb-2">Head of Pediatrics</p>
              <p className="text-sm text-primary-200">
                Pediatric specialist dedicated to children's health and development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About