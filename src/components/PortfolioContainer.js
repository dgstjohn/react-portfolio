import React, { useState } from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import NavTabs from './NavTabs';

function PageSwitch() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PageSwitch;
