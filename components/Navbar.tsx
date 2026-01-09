
import React from 'react';
import { AppSection, UserRole } from '../types';

interface NavbarProps {
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, role, setRole }) => {
  const navItems = [
    { id: AppSection.HOME, label: 'Beranda' },
    { id: AppSection.LEGAL, label: 'Landasan Hukum' },
    { id: AppSection.TECHNICAL, label: 'Indikator Teknis' },
    { id: AppSection.ABOUT, label: 'Tentang' },
    { id: AppSection.REGISTRATION, label: 'Registrasi' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection(AppSection.HOME)}>
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">RC</div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-none">Smart-RC</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">BPTD KELAS II DIY</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setRole('USER');
                  setActiveSection(item.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id && role === 'USER'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setRole(role === 'USER' ? 'ADMIN' : 'USER')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                role === 'ADMIN'
                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                  : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}
            >
              Mode: {role}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
