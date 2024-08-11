import React, { useRef, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';


const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [isNavBarAtProfile, setIsNavBarAtProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const profileSection = profileRef.current?.getBoundingClientRect();
      if(profileSection){
        const isAtProfile = profileSection.top <= 60 && profileSection.bottom >= 60;
        setIsNavBarAtProfile(isAtProfile);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar 
        isNavBarAtProfile={isNavBarAtProfile}
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToProfile={() => scrollToSection(profileRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <div ref={homeRef}>
        <Home profileRef={profileRef} />
      </div>
        
      <div ref={profileRef} style={{ paddingTop:'60px', height: '500px'}}>
        <h2>Profile Section</h2>
        <p>Content for the Portfolio section.</p>
      </div>

      <div ref={contactRef} style={{height: '500px'}}>
        <h2>Contact Section</h2>
        <p>Content for the Contact section.</p>
      </div>
    </div>
  )
}

export default App;