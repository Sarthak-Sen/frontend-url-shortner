import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ResultDisplayProps } from '../../types';
import './ResultDisplay.css';

const ResultDisplay = ({ shortenedUrl, onReset }: ResultDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      // Modern fallback - just show an alert
      alert('Failed to copy. Please copy manually.');
    }
  };

  return (
    <div className="result-display">
      <div className="result-header">
        <h3 className="result-title">Your shortened URL:</h3>
      </div>
      
      <div className="result-content">
        <div className="url-container">
          <input
            type="text"
            value={shortenedUrl}
            readOnly
            className="result-url"
          />
          <button
            onClick={handleCopy}
            className="copy-button"
            type="button"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        
        <button
          onClick={onReset}
          className="reset-button"
          type="button"
        >
          Shorten another URL
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;