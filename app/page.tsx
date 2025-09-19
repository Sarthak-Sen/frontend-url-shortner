'use client';

import Header from '../src/components/Header/Header';
import UrlShortener from '../src/components/UrlShortner/UrlShortner';

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <UrlShortener />
      </div>
    </div>
  );
}