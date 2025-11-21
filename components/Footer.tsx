import React from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 border-t border-purple-800/30 py-8">
      <div className="container mx-auto px-4 md:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/mickDoctorDev/" className="hover:text-white transition-colors">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/noppawat-loryingyongphaisal-129808343" className="hover:text-white transition-colors">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
             <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
             <FacebookIcon className="w-8 h-8" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Nop_mick. All rights reserved in this galaxy.</p>
      </div>
    </footer>
  );
};

export default Footer;