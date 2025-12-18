import React from 'react';

interface PortfolioViewerProps {
    onBack: () => void;
}

const PortfolioViewer: React.FC<PortfolioViewerProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-screen w-full bg-gray-900 text-white animate-[fadeIn_0.5s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 shadow-md z-10">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 font-semibold text-white bg-transparent border border-gray-500 rounded-lg hover:bg-gray-700 hover:border-white transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </button>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                    My High School Portfolio
                </div>
                <div className="w-24"></div> {/* Spacer for center alignment */}
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-grow w-full h-full relative bg-gray-600">
                {/* Placeholder for PDF - In real usage, replace src with actual PDF path */}
                {/* Using a generic sample or empty iframe for now since we don't have the file */}
                <iframe
                    src="assets/images/portfolio_Med.pdf" // Placeholder path
                    className="w-full h-full"
                    title="Portfolio PDF"
                    style={{ border: 'none' }}
                >
                    <p className="text-center p-10 text-white">
                        Your browser does not support PDFs.
                        <a href="assets/images/portfolio_Med.pdf" className="text-cyan-400 underline">Download the PDF</a>.
                    </p>
                </iframe>

                {/* Fallback message if file not found (simulated UI) */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                        <p className="text-2xl mb-2">📄</p>
                        <p>Loading PDF...</p>
                        <p className="text-sm mt-2 opacity-50">(Ensure 'portfolio.pdf' is in the public/assets folder)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioViewer;
