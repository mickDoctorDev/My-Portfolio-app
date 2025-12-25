import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PortfolioViewerProps {
    onBack: () => void;
}

const PortfolioViewer: React.FC<PortfolioViewerProps> = ({ onBack }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function changeScalejb(offset: number) {
        setScale(prevScale => Math.max(0.5, prevScale + offset));
    }

    // Render for Desktop (Iframe)
    if (!isMobile) {
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

                {/* PDF Viewer Body - Iframe for Desktop */}
                <div className="flex-grow w-full h-full relative bg-gray-600">
                    <iframe
                        src="/assets/images/portfolio_Med.pdf"
                        className="w-full h-full"
                        title="Portfolio PDF"
                        style={{ border: 'none' }}
                    >
                        <p className="text-center p-10 text-white">
                            Your browser does not support PDFs.
                            <a href="/assets/images/portfolio_Med.pdf" className="text-cyan-400 underline">Download the PDF</a>.
                        </p>
                    </iframe>
                </div>
            </div>
        );
    }

    // Render for Mobile (React-PDF)
    return (
        <div className="flex flex-col h-screen w-full bg-gray-900 text-white animate-[fadeIn_0.5s_ease-out] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 shadow-md z-10 shrink-0">
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
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 hidden sm:block">
                    My High School Portfolio
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1">
                        <button
                            disabled={scale <= 0.5}
                            onClick={() => changeScalejb(-0.1)}
                            className="p-1 hover:bg-gray-600 rounded disabled:opacity-50"
                        >
                            -
                        </button>
                        <span className="text-xs w-8 text-center">{Math.round(scale * 100)}%</span>
                        <button
                            onClick={() => changeScalejb(0.1)}
                            className="p-1 hover:bg-gray-600 rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-grow w-full h-full relative bg-gray-600 overflow-auto flex justify-center p-4">
                <Document
                    file="/assets/images/portfolio_Med.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex items-center justify-center p-10">
                            <div className="text-xl text-white animate-pulse">Loading PDF...</div>
                        </div>
                    }
                    error={
                        <div className="text-center p-10 text-white">
                            <p className="mb-4">Unable to load the PDF file.</p>
                            <a
                                href="/assets/images/portfolio_Med.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500 transition-colors"
                            >
                                Download PDF
                            </a>
                        </div>
                    }
                    className="shadow-2xl"
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="mb-4 shadow-lg"
                    />
                </Document>
            </div>

            {/* Footer Navigation */}
            <div className="bg-gray-800 p-4 border-t border-gray-700 flex justify-center items-center gap-4 shrink-0 z-10">
                <button
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Prev
                </button>

                <span className="text-gray-300 font-medium whitespace-nowrap">
                    Page {pageNumber || '--'} of {numPages || '--'}
                </span>

                <button
                    disabled={numPages === null || pageNumber >= numPages}
                    onClick={nextPage}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
                >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PortfolioViewer;
