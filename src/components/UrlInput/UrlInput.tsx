import React from 'react';
import { URLInputProps } from '../../types';
import './UrlInput.css';

const URLInput = ({value, onChange, onSubmit, isLoading} : URLInputProps) => {
    return (
    <div className="url-input">
      <div className="input-section">
        <label htmlFor="url-textarea" className="input-label">
          Enter your long URL
        </label>
        <textarea
          id="url-textarea"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          placeholder="Paste your long URL here..."
          rows={4}
          className="url-textarea"
          disabled={isLoading}
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={!value.trim() || isLoading}
        className="shorten-button"
        type="button"
      >
        {isLoading ? 'Shortening...' : 'Shorten URL'}
      </button>
    </div>
  );
};

export default URLInput;