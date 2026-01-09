
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">RC</div>
              <h2 className="text-xl font-bold text-blue-900 tracking-tight">Smart-RC DIY</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Sistem Informasi Manajemen Rampcheck Terpadu. Menghubungkan BPTD Kelas II DIY dengan operator PO Bus secara transparan, akuntabel, dan efisien.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center grayscale opacity-50">IG</div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center grayscale opacity-50">TW</div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center grayscale opacity-50">FB</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Tautan</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Kemenhub RI</a></li>
              <li><a href="#" className="hover:text-blue-600">Ditjen Perhubungan Darat</a></li>
              <li><a href="#" className="hover:text-blue-600">BPTD DIY</a></li>
              <li><a href="#" className="hover:text-blue-600">Sistem S-IKE</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Kontak Kami</h3>
            <div className="text-sm text-slate-600 space-y-2">
              <p className="font-bold text-slate-800">BPTD Kelas II DIY</p>
              <p>Jl. Sorogaten No. 12, Umbulharjo</p>
              <p>Kota Yogyakarta, DIY</p>
              <p className="pt-2">Telp: (0274) 37xxxx</p>
              <p>Email: sarana.bptddiy@dephub.go.id</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            &copy; 2024 Smart-RC BPTD DIY. Dikembangkan untuk Tugas Akhir D3 Teknologi Otomotif.
          </p>
          <div className="flex space-x-6 text-xs font-medium text-slate-400">
            <a href="#" className="hover:text-slate-600">Privasi</a>
            <a href="#" className="hover:text-slate-600">Ketentuan</a>
            <a href="#" className="hover:text-slate-600">Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
