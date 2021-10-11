import React from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
