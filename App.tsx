
import React, { useState, useEffect } from 'react';
import { AppSection, UserRole, RampcheckApplication, ApplicationStatus } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LegalSection from './components/LegalSection';
import TechnicalSection from './components/TechnicalSection';
import AboutSection from './components/AboutSection';
import RegistrationSection from './components/RegistrationSection';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [role, setRole] = useState<UserRole>('USER');
  const [applications, setApplications] = useState<RampcheckApplication[]>([]);

  // Simulation of persistent data
  useEffect(() => {
    const saved = localStorage.getItem('smart_rc_apps');
    if (saved) {
      setApplications(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('smart_rc_apps', JSON.stringify(applications));
  }, [applications]);

  const handleApply = (newApp: Omit<RampcheckApplication, 'id' | 'status' | 'submittedAt'>) => {
    const fullApp: RampcheckApplication = {
      ...newApp,
      id: `RC-${Date.now()}`,
      status: ApplicationStatus.PENDING,
      submittedAt: new Date().toISOString(),
    };
    setApplications(prev => [fullApp, ...prev]);
    alert("Permohonan berhasil dikirim! Silakan cek menu riwayat di bagian bawah halaman registrasi.");
  };

  const handleUpdateStatus = (id: string, status: ApplicationStatus) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status } : app
    ));
  };

  const renderSection = () => {
    if (role === 'ADMIN') return <AdminDashboard applications={applications} onUpdateStatus={handleUpdateStatus} />;

    switch (activeSection) {
      case AppSection.HOME: return <Hero onNavigate={setActiveSection} />;
      case AppSection.LEGAL: return <LegalSection />;
      case AppSection.TECHNICAL: return <TechnicalSection />;
      case AppSection.ABOUT: return <AboutSection />;
      case AppSection.REGISTRATION: 
        return <RegistrationSection 
          onApply={handleApply} 
          applications={applications} 
        />;
      default: return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-300">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        role={role} 
        setRole={setRole} 
      />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSection()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
