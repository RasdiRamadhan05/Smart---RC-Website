
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Mewujudkan Transportasi <br/> Aman & Berintegritas</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Smart-RC (Smart Rampcheck) adalah inisiatif BPTD Kelas II DIY untuk mendigitalisasi proses birokrasi permohonan inspeksi keselamatan bus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">01</div>
          <h3 className="text-xl font-bold text-slate-800">Apa itu Rampcheck?</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Rampcheck adalah inspeksi keselamatan kendaraan yang dilakukan secara mendadak atau terjadwal di terminal maupun di jalan untuk memastikan kelaikan kendaraan angkutan umum demi menjamin keselamatan penumpang.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">02</div>
          <h3 className="text-xl font-bold text-slate-800">Tujuan & Fungsi</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Mencegah kecelakaan lalu lintas yang disebabkan oleh kegagalan teknis kendaraan, serta memberikan rasa aman dan nyaman bagi masyarakat yang menggunakan jasa angkutan bus.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-400">Visi Kemenhub</h3>
          <blockquote className="text-xl italic font-medium leading-relaxed">
            "Terwujudnya penyelenggaraan pelayanan perhubungan yang selamat, aman, nyaman, tepat waktu, terpelihara dan menjangkau seluruh pelosok tanah air."
          </blockquote>
          <p className="text-sm text-slate-400 uppercase tracking-widest pt-4">Kementerian Perhubungan Republik Indonesia</p>
        </div>
        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/5 shrink-0">
           <img src="https://picsum.photos/id/191/200/200" alt="kemenhub logo" className="w-32 h-32 object-contain opacity-50 grayscale" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
