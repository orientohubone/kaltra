import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.TECHNOLOGY:
        return <Technology />;
      case Page.SOLUTIONS:
        return <Solutions />;
      case Page.ABOUT:
        return <About />;
      case Page.BLOG:
        return <Blog />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout activePage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;