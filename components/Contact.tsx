import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to send a message into my corner of the universe.
        </p>
        <a
          href="mailto:hello@micklance.com"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/40"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;