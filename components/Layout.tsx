import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Globe, Cpu, ChevronRight, ArrowUpRight, MapPin, Mail, Linkedin, Twitter } from 'lucide-react';
import { Page, NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Tecnologia', page: Page.TECHNOLOGY },
  { label: 'Soluções', page: Page.SOLUTIONS },
  { label: 'Sobre', page: Page.ABOUT },
  { label: 'Insights', page: Page.BLOG },
];

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-kaltra-graphite font-sans text-slate-300 selection:bg-kaltra-glacial selection:text-kaltra-graphite">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-kaltra-graphite/80 backdrop-blur-lg border-kaltra-border' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer group flex items-center gap-2" 
              onClick={() => handleNavClick(Page.HOME)}
            >
              <div className="w-8 h-8 border border-kaltra-glacial flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-[1px] bg-kaltra-glacial rotate-45 transform origin-center animate-pulse-slow"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter select-none">
                <span className="text-white">KAL</span>
                <span className="text-kaltra-glacial group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">TRA</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
                      activePage === item.page 
                        ? 'text-kaltra-glacial' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => handleNavClick(Page.CONTACT)}
                  className="ml-4 px-5 py-2 text-sm font-medium text-kaltra-graphite bg-kaltra-glacial hover:bg-kaltra-glacialHover transition-all rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                >
                  Agendar Demo
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-kaltra-panel border-b border-kaltra-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                     activePage === item.page ? 'text-kaltra-glacial bg-kaltra-graphite' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                 onClick={() => handleNavClick(Page.CONTACT)}
                 className="w-full text-left px-3 py-3 text-kaltra-glacial font-bold"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kaltra-panel border-t border-kaltra-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <span className="text-2xl font-bold tracking-tighter">
                <span className="text-white">KAL</span>
                <span className="text-kaltra-glacial">TRA</span>
              </span>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Engenharia de dados e inteligência artificial para a agricultura do futuro. Construindo o digital twin do campo.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Plataforma</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.SOLUTIONS)}>Kaltra Twin</li>
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.SOLUTIONS)}>Kaltra Predict</li>
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.TECHNOLOGY)}>Kaltra Engine</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.ABOUT)}>Sobre Nós</li>
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.BLOG)}>Insights & Blog</li>
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors">Carreiras</li>
                <li className="hover:text-kaltra-glacial cursor-pointer transition-colors" onClick={() => handleNavClick(Page.CONTACT)}>Imprensa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><MapPin size={14} className="text-kaltra-glacial"/> São Paulo, Brasil</li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-kaltra-glacial"/> contact@kaltra.ai</li>
                <li className="flex gap-4 mt-4">
                    <Linkedin className="text-slate-400 hover:text-white cursor-pointer w-5 h-5" />
                    <Twitter className="text-slate-400 hover:text-white cursor-pointer w-5 h-5" />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-kaltra-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Kaltra Deeptech. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacidade</span>
              <span className="hover:text-white cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;