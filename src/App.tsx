import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import './App.css';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar 
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToPortfolio={() => scrollToSection(portfolioRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <div className="content">
        <div ref={homeRef} className='home'>
          
        </div>
        
        <div ref={portfolioRef} style={{height: '500px'}}>
          <h2>Portfolio Section</h2>
          <p>Content for the Portfolio section.</p>
        </div>

        <div ref={contactRef}>
          <h2>Contact Section</h2>
          <p>Content for the Contact section.</p>
        </div>
      </div>
    </div>
  )
}

export default App;

// #005ad5 (포인트 컬러로 사용)