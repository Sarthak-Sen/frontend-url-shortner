import React, { useState } from 'react';
import URLInput from '../UrlInput/UrlInput';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import { URLShortenRequest, URLShortenResponse } from '../../types';
import './UrlShortner.css';

const URLShortener = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortenedUrl, setShortenedUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShorten = async (): Promise<void> => {
    if (!originalUrl.trim()) return;

    setIsLoading(true);
    
    try {      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/Url/CreateShortUrl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(originalUrl),
      });
      
      if (response.ok) {
        const data: URLShortenResponse = await response.json();
        setShortenedUrl(data.shortUrl);
      } else {
        const errorMessage = `Failed to shorten URL: ${response.status} ${response.statusText}`;
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = (): void => {
    setOriginalUrl('');
    setShortenedUrl('');
  };

  return (
    <div className="url-shortener">
      <URLInput 
        value={originalUrl}
        onChange={setOriginalUrl}
        onSubmit={handleShorten}
        isLoading={isLoading}
      />
      
      {shortenedUrl && (
        <ResultDisplay 
          shortenedUrl={shortenedUrl}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default URLShortener;