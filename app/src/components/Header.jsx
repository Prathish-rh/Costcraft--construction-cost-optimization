import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Welcome to My App</h1>
      <nav>
        <a href="#home" className="App-link">Home</a>
        <a href="#about" className="App-link">About</a>
        <a href="#contact" className="App-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
