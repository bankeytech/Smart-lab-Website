import React, { useState } from 'react';
import Mpic from "../assets/mark.png";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'software',
    motivation: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const whoCanApply = [
    "Students interested in technology and engineering",
    "Beginners willing to learn new skills",
    "Experienced developers looking for real projects",
    "Designers, thinkers, and problem solvers"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);

      // 🔌 TODO: Replace with your backend/API call
      console.log('Submitting application:', formData);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));

      setSuccess('Application submitted successfully! We will contact you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: 'software',
        motivation: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#051F20] to-[#163832] min-h-screen text-[#DAF1DE]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-20">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className='text-4xl font-bold mb-3'>Join the Lab</h1>
            <p className='text-lg'>
              You do not need to know everything — all you need is the willingness
              to learn and build. We are looking for passionate students who 
              want to make an impact.
            </p>

            <div className='mt-10 flex flex-col gap-2 bg-[#DAF1DE]/90 text-[#163832] rounded-lg p-8'>
              <h3 className='text-2xl font-bold mb-3'>Who can Apply</h3>

              {whoCanApply.map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={Mpic} alt="check icon" className='w-5 h-5' />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className='mt-10 flex flex-col gap-2'>
              <h3 className='text-2xl font-bold mb-2'>How to Join</h3>
              <p>
                Fill out the application form on this page. We review applications on a 
                rolling basis. Once submitted, a team lead will reach out to schedule a
                brief chat to get to know you better.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className='bg-[#DAF1DE]/90 text-[#163832] p-10 rounded-lg font-semibold flex flex-col gap-6'
          >
            {/* Status Messages */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 text-green-700 p-3 rounded">
                {success}
              </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <h4>First Name *</h4>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className='w-full pl-4 py-2 outline-none rounded-md'
                  required
                />
              </div>

              <div>
                <h4>Last Name *</h4>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className='w-full pl-4 py-2 outline-none rounded-md'
                  required
                />
              </div>
            </div>

            <div>
              <h4>University Email *</h4>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane.doe@university.edu"
                className='w-full pl-4 py-2 outline-none rounded-md'
                required
              />
            </div>

            <div>
              <h4>Area of Interest</h4>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className='w-full pl-4 py-2 outline-none rounded-md bg-white'
              >
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
              </select>
            </div>

            <div>
              <h4>Why do you want to join?</h4>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Tell us about your projects or what you want to learn..."
                className='w-full pl-4 py-2 h-24 outline-none rounded-md'
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className='bg-[#163832] text-[#DAF1DE] px-4 py-2 rounded-lg w-full disabled:opacity-60'
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
