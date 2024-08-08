import React, { useRef } from 'react';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavBar 
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToPortfolio={() => scrollToSection(portfolioRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />

      <div ref={homeRef} style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
        <h2>Home Section</h2>
        <p>Content for the Home section.</p>
      </div>
      
      <div ref={portfolioRef} style={{ height: '100vh', backgroundColor: '#e9ecef' }}>
        <h2>Portfolio Section</h2>
        <p>Content for the Portfolio section.</p>
      </div>

      <div ref={contactRef} style={{ height: '100vh', backgroundColor: '#dee2e6' }}>
        <h2>Contact Section</h2>
        <p>Content for the Contact section.</p>
      </div>
    </div>
  )
}

export default App;
