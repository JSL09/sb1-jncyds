import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'biography', label: 'Biografía' },
    { id: 'music', label: 'Música' },
    { id: 'stories', label: 'Relatos y Poemas' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="flex justify-center space-x-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeSection === item.id
              ? 'bg-purple-700 text-white'
              : 'text-gray-300 hover:bg-purple-600 hover:text-white'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;