
import React from 'react';
import { LEGAL_BASIS } from '../constants';

const LegalSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Landasan Hukum</h2>
        <p className="text-slate-600">
          Pelaksanaan rampcheck didasarkan pada peraturan perundang-undangan yang berlaku untuk menjamin keselamatan transportasi darat.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-4 border-b border-slate-200 font-bold text-slate-700">Peraturan</th>
              <th className="p-4 border-b border-slate-200 font-bold text-slate-700">Topik Pembahasan</th>
              <th className="p-4 border-b border-slate-200 font-bold text-slate-700">Keterangan Ringkas</th>
            </tr>
          </thead>
          <tbody>
            {LEGAL_BASIS.map((item, idx) => (
              <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                <td className="p-4 border-b border-slate-100 font-semibold text-blue-700">{item.rule}</td>
                <td className="p-4 border-b border-slate-100 text-slate-800 font-medium">{item.topic}</td>
                <td className="p-4 border-b border-slate-100 text-slate-500 text-sm leading-relaxed">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">⚖️</span> Ambang Batas Teknis
          </h3>
          <ul className="space-y-3 opacity-90 text-sm">
            <li className="flex justify-between border-b border-blue-800 pb-2">
              <span>Efisiensi Rem Utama</span>
              <span className="font-bold">Min. 50%</span>
            </li>
            <li className="flex justify-between border-b border-blue-800 pb-2">
              <span>Penyimpangan Roda Depan</span>
              <span className="font-bold">Maks. 5 mm/m</span>
            </li>
            <li className="flex justify-between border-b border-blue-800 pb-2">
              <span>Intensitas Lampu Utama</span>
              <span className="font-bold">Min. 12.000 cd</span>
            </li>
            <li className="flex justify-between border-b border-blue-800 pb-2">
              <span>Kadar Karbon Monoksida (CO)</span>
              <span className="font-bold">Sesuai Tahun Rakit</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
           <h3 className="text-xl font-bold text-slate-800 mb-4">Catatan Penting</h3>
           <p className="text-slate-600 text-sm leading-relaxed mb-4">
             Setiap kendaraan yang tidak memenuhi kriteria di atas dinyatakan <strong>Tidak Laik Jalan</strong> dan wajib melakukan perbaikan sebelum dilakukan pemeriksaan ulang.
           </p>
           <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-500">
             &copy; BPTD Kelas II DIY - Seksi Sarana
           </div>
        </div>
      </div>
    </div>
  );
};

export default LegalSection;
