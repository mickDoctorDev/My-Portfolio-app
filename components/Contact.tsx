import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    tel: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, surname, email, tel, subject, message } = formData;
    
    const mailtoLink = `mailto:mick.doctordev@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${name} ${surname}\nEmail: ${email}\nTel: ${tel}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-400">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 transition-colors">
          I'm always open to discussing new projects, creative ideas, or opportunities. Fill out the form below to beam a message directly to my inbox.
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="group bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-200 dark:border-purple-800/30 shadow-xl transition-all duration-500 ease-in-out focus-within:bg-gradient-to-br focus-within:from-purple-50 focus-within:to-white dark:focus-within:from-purple-50 dark:focus-within:to-white focus-within:scale-105 focus-within:shadow-[0_0_40px_rgba(168,85,247,0.5)] focus-within:border-purple-400 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="text-left">
              <label htmlFor="surname" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
                placeholder="Your Surname"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="text-left">
              <label htmlFor="tel" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Tel.</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="mb-6 text-left">
            <label htmlFor="subject" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
              placeholder="Project Inquiry"
            />
          </div>
          
          <div className="mb-8 text-left">
             <label htmlFor="message" className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-1 transition-colors duration-300 group-focus-within:text-purple-800">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-purple-500/30 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 group-focus-within:bg-white group-focus-within:text-gray-800 group-focus-within:placeholder-gray-400 group-focus-within:border-purple-300 group-focus-within:focus:ring-purple-500"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white font-bold py-4 px-12 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/40 group-focus-within:shadow-purple-500/60"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;