import React from 'react';

type IconProps = {
  className?: string;
};

export const GitHubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const ReactIcon: React.FC = () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
);

export const TypeScriptIcon: React.FC = () => (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#007ACC" d="M0 0h128v128H0z"></path><path fill="#fff" d="M23.5 23.5h81v81h-81z"></path><path fill="#007ACC" d="M91.3 54.3c0-4.1-1.5-7.5-4.4-10.2-2.9-2.7-6.7-4-11.2-4h-23v49.8h9.8V67.7h10.8l10 26.4h11l-11.8-29.2c3-1.6 4.8-4.5 4.8-8.6Zm-25.8-9h14c2.8 0 5 1 6.3 3.2 1.3 2.1 2 4.6 2 7.4s-.7 5.3-2 7.5-3.5 3.3-6.3 3.3h-14v-21.4Z"></path></svg>
);

export const NodeIcon: React.FC = () => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#68a063" d="M128 0C57.308 0 0 57.308 0 128c0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128Z"></path><path fill="#ffffff" d="m154.512 113.88-5.32-9.214-23.016-39.866-27.676 47.942-5.32 9.214 5.32 9.214 30.502 52.834h61.004l-29.07-50.354-5.32-9.214-1.104-1.912ZM93.58 87.21l23.016-39.866 23.016 39.866-23.016 39.866L93.58 87.21Z"></path></svg>
);

export const TailwindIcon: React.FC = () => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 28c-6.629 0-12-5.371-12-12s5.371-12 12-12 12 5.371 12 12-5.371 12-12 12zm0-26c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14z" fill="#38bdf8"></path><path d="m10 13c-1.105 0-2 .895-2 2s.895 2 2 2c1.105 0 2-.895 2-2s-.895-2-2-2zm-1.5 6h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z" fill="#38bdf8"></path><path d="m15 13c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5zm-2 6h4c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z" fill="#38bdf8"></path></svg>
);

export const JavaScriptIcon: React.FC = () => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h256v256H0V0Z" fill="#f7df1e"></path><path d="m123 183c2.3 3.9 6.8 5.6 11.2 5.6 4.6 0 7.8-1.5 7.8-7.3 0-4.9-2.9-6.8-8.2-9.7l-2.8-1.5c-7.5-4-12.4-8.8-12.4-17.9 0-8.2 6.1-14.7 16.1-14.7 6.6 0 11.8 2.3 15.3 8.6l-8.5 5.5c-1.6-2.9-3.9-4.2-6.8-4.2-2.3 0-4.1 1.2-4.1 4.1 0 3.3 2.1 4.9 6.8 7.5l2.8 1.5c9 4.9 14 9.3 14 18.9 0 9.8-7 16.2-17.7 16.2-9.6 0-15.6-5.1-18.4-10.6l8.8-5.3zm-51.5 5.6h10.3v-23.3c0-4.6-1.2-6.5-5.9-6.5-3.3 0-5.1 1.2-6.3 3.2l-8.6-5.4c3.4-5.3 9.5-8.6 17.5-8.6 11.6 0 17.7 5.6 17.7 17.3v23.3h10.3v9.1H71.5v-9.1Z"></path></svg>
);

export const NextJSIcon: React.FC = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="64" fill="#000"></circle><path fill="url(#a)" d="M106.3,21.7,42.7,94.1V21.7h-21v84.6h16.3L99.2,35.1v60.7h21V21.7Z"></path><path fill="url(#b)" d="M106.3,21.7,42.7,94.1V21.7h-21v84.6h16.3L99.2,35.1v60.7h21V21.7Z"></path><defs><linearGradient id="a" x1="64.5" x2="64.5" y1="21.7" y2="106.3" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(79.375 -24.375 22.3846 72.8846 48.5 93.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></radialGradient></defs></svg>
);

export const FigmaIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.1,12a3.1,3.1,0,0,1,3.1-3.1h0a3.1,3.1,0,0,1,3.1,3.1h0a3.1,3.1,0,0,1-3.1,3.1h0A3.1,3.1,0,0,1,15.1,12Z" fill="#1abcfe"></path><path d="M8.9,12a3.1,3.1,0,0,1,3.1-3.1h0a3.1,3.1,0,0,1,3.1,3.1h0a3.1,3.1,0,0,1-3.1,3.1h0A3.1,3.1,0,0,1,8.9,12Z" fill="#0acf83"></path><path d="M8.9,18.2a3.1,3.1,0,0,1,3.1-3.1h0a3.1,3.1,0,0,1,3.1,3.1h0a3.1,3.1,0,0,1-3.1,3.1h0A3.1,3.1,0,0,1,8.9,18.2Z" fill="#ff7262"></path><path d="M8.9,5.8a3.1,3.1,0,0,1,3.1-3.1h0a3.1,3.1,0,0,1,3.1,3.1h0a3.1,3.1,0,0,1-3.1,3.1h0A3.1,3.1,0,0,1,8.9,5.8Z" fill="#f24e1e"></path><path d="M2.7,12a3.1,3.1,0,0,1,3.1-3.1h0a3.1,3.1,0,0,1,3.1,3.1h0a3.1,3.1,0,0,1-3.1,3.1h0A3.1,3.1,0,0,1,2.7,12Z" fill="#a259ff"></path></svg>
);

export const GitIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.02,9.63,14.37,2,12,4.35V2h-1.5v3.29l-3.32-3.3a.75.75,0,0,0-1.06,0L1.98,6.12a.75.75,0,0,0,0,1.06l4.06,4.06-4.06,4.06a.75.75,0,0,0,0,1.06l4.13,4.13a.75.75,0,0,0,1.06,0l3.32-3.3V22h1.5V18.65l2.37,2.37,7.65-7.65a.75.75,0,0,0,0-1.06ZM6.59,18.59l-2.5-2.5,2.5-2.5,2.5,2.5Zm0-8L4.09,8.09l2.5-2.5,2.5,2.5Zm8.5,4.35a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,15.09,14.94Z" fill="#f1502f"></path></svg>
);
