import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
      document.body.style.position = 'relative'; // Prevent content shift
    } else {
      document.body.style.overflow = ''; // Enable scrolling
      document.body.style.position = ''; // Reset position
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
      document.body.style.position = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full md:w-full z-50 bg-[#0a0a0a] text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer">
        <img
            src="/mk-logo.png"
            alt="Logo"
            className="w-14 h-14 object-contain md:w-20 md:h-20"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              className="hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] md:hidden h-screen overflow-hidden">
            <div className="flex flex-col items-center py-4 space-y-4 h-full justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  className="hover:text-blue-500 cursor-pointer transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
