import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'O Nas', href: '/o-nas', external: true },
    { label: 'Terapia', href: '/terapia', external: true },
    { label: 'EduWay', href: '/eduway', external: true },
    { label: 'Cennik', href: '/cennik', external: true },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass shadow-md backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/c64cf2c8-c2d3-4584-817e-f02a9471e25d.png" 
              alt="MyWay - Ośrodek Leczenia Uzależnień"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href.startsWith('#') && location.pathname === '/' && location.hash === item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    "hover:text-primary transition-colors duration-300 font-medium",
                    isActive && "text-primary"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+48731395295" className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+48 731 395 295</span>
            </a>
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="btn-premium">
                Umów rozmowę
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-strong border-t border-border mt-2 rounded-lg p-4 animate-fade-in-scale">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href || (item.href.startsWith('#') && location.pathname === '/' && location.hash === item.href);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "hover:text-primary transition-colors font-medium py-2",
                      isActive && "text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              
              <div className="pt-4 border-t border-border">
                <a href="tel:+48731395295" className="flex items-center space-x-2 text-primary mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+48 731 395 295</span>
                </a>
                <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-premium w-full">
                    Umów rozmowę
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;