
import React from 'react';
import { AppSection } from '../types';
import { OFFICIAL_PO_LIST } from '../constants';

interface HeroProps {
  onNavigate: (section: AppSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="relative overflow-hidden rounded-3xl bg-blue-900 text-white p-8 md:p-16">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-700/50 text-blue-200 text-sm font-semibold mb-6">
            Inovasi Digital Transportasi DIY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Permohonan Rampcheck Kini Lebih <span className="text-amber-400">Mudah & Cepat</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Selamat datang di Smart-RC. Platform resmi BPTD Kelas II DIY untuk pengajuan inspeksi keselamatan (rampcheck) angkutan bus secara mandiri dan transparan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate(AppSection.REGISTRATION)}
              className="bg-amber-400 hover:bg-amber-500 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              Ajukan Sekarang
            </button>
            <button 
              onClick={() => onNavigate(AppSection.ABOUT)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
           <img src="https://picsum.photos/id/183/800/600" alt="bus" className="w-full h-full object-cover" />
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Daftar PO Bus Resmi</h2>
            <p className="text-slate-500">PO Bus yang terdaftar dan dilayani oleh BPTD Kelas II DIY</p>
          </div>
          <div className="hidden sm:block">
            <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Total: {OFFICIAL_PO_LIST.length} PO
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_PO_LIST.map((po) => (
            <div key={po.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.806H8.002c-.846 0-1.588.513-1.871 1.313a17.914 17.914 0 00-3.213 9.193c-.039.62.469 1.124 1.09 1.124H8.25" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase">{po.address}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{po.name}</h3>
              <p className="text-sm text-slate-500 mb-4">Melayani trayek resmi Provinsi DIY</p>
              <div className="flex items-center text-sm font-medium text-blue-600">
                <span>{po.fleetCount} Armada Terdaftar</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 rounded-3xl p-8 border border-amber-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-amber-900">Jadwal Rampcheck Rutin</h2>
            <p className="text-amber-800/80 leading-relaxed">
              Pemeriksaan keselamatan akan dilaksanakan mulai tanggal 01 - 15 setiap bulannya bertempat di Terminal Tipe A Giwangan dan Terminal Tipe A Dhaksinarga. Harap PO mempersiapkan armada sesuai checklist teknis.
            </p>
            <button className="text-amber-700 font-bold underline decoration-2 underline-offset-4 hover:text-amber-900">
              Lihat Kalender Lengkap →
            </button>
          </div>
          <div className="w-full md:w-64 bg-white rounded-2xl p-6 shadow-sm border border-amber-200 flex flex-col items-center justify-center space-y-2">
            <span className="text-slate-400 text-xs font-bold uppercase">Update Terakhir</span>
            <span className="text-4xl font-black text-blue-900">24</span>
            <span className="text-slate-600 font-medium">Mei 2024</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
