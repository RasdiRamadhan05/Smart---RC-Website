
import React from 'react';
import { TECHNICAL_INDICATORS } from '../constants';

const TechnicalSection: React.FC = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Indikator Teknis Rampcheck</h2>
        <p className="text-slate-600">
          Aspek-aspek utama yang diperiksa dalam inspeksi keselamatan. Pastikan armada Anda memenuhi kriteria ini sebelum operasional.
        </p>
      </div>

      <div className="relative bg-white rounded-3xl p-8 border border-slate-200 overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {TECHNICAL_INDICATORS.map((indicator, idx) => (
                 <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all">
                    <div className="text-2xl mb-2">{indicator.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-1">{indicator.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{indicator.desc}</p>
                 </div>
               ))}
             </div>
          </div>
          <div className="w-full lg:w-96 bg-blue-50 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full aspect-video bg-white rounded-xl mb-4 border border-blue-100 overflow-hidden flex items-center justify-center text-slate-300 relative">
               <img src="https://picsum.photos/id/1072/400/300" alt="bus check" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            <p className="text-xs text-blue-800 font-medium text-center">
              Visualisasi pemeriksaan ban dan sistem suspensi pada armada bus antar kota.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-400 p-8 rounded-3xl text-amber-950">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shrink-0">⚠️</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Himbauan Pra-Inspeksi</h3>
            <p className="font-medium opacity-90 leading-relaxed">
              Kami menyarankan teknisi PO Bus untuk melakukan pemeriksaan mandiri (Self-Assessment) menggunakan poin-poin indikator teknis di atas setiap hari sebelum armada diberangkatkan dari garasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;
