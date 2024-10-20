import { ArrowUpFromDot, DownloadIcon } from 'lucide-react';
import { useState } from 'react';

export default function Radio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDownload = (format: string) => {
    setSelectedFormat(format);
    // Simulate a download process
    // alert(`${format} file selected. Initiating download...`);
    setIsOpen(false);
    // Logic for downloading the file based on format goes here
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={toggleDropdown}
        className="inline-flex text-white justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-purple-500  text-sm font-medium  hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download Output as {selectedFormat || <>...  <ArrowUpFromDot className="ml-2 h-4 w-4"/> </> }
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-bottom-center absolute right-1/3 mb-2 w-56 rounded-md shadow-lg bg-purple-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ bottom: '100%' }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-top"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleDownload('TEXT')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download as TEXT
            </button>
            <button
              onClick={() => handleDownload('JPEG')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download as JPEG
            </button>
            <button
              onClick={() => handleDownload('JSON')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download as JSON
            </button>
            <button
              onClick={() => handleDownload('PDF')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download as PDF
            </button>
            <button
              onClick={() => handleDownload('Video')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download Video File
            </button>
            <button
              onClick={() => handleDownload('LOG')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-purple-300 w-full text-left"
              role="menuitem"
            >
              Download LOG File
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
