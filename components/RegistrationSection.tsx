
import React, { useState } from 'react';
import { RampcheckApplication, ApplicationStatus } from '../types';
import { OFFICIAL_PO_LIST } from '../constants';

interface RegistrationSectionProps {
  onApply: (app: Omit<RampcheckApplication, 'id' | 'status' | 'submittedAt'>) => void;
  applications: RampcheckApplication[];
}

const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onApply, applications }) => {
  const [formData, setFormData] = useState({
    poId: '',
    poName: '',
    inspectionDate: '',
    vehicleCount: 1,
    vehiclePlates: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.poId || !formData.inspectionDate) {
      alert("Harap isi semua field wajib!");
      return;
    }
    
    onApply({
      ...formData,
      dateRequested: new Date().toISOString().split('T')[0],
    });
    
    // Reset form
    setFormData({
      poId: '',
      poName: '',
      inspectionDate: '',
      vehicleCount: 1,
      vehiclePlates: '',
    });
  };

  const selectedPO = OFFICIAL_PO_LIST.find(p => p.id === formData.poId);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-blue-800 p-8 text-white">
          <h2 className="text-2xl font-bold">Form Pengajuan Rampcheck</h2>
          <p className="text-blue-100 text-sm mt-1 opacity-80">Silakan lengkapi data permohonan di bawah ini secara resmi.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Nama PO Bus</label>
            <select 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={formData.poId}
              onChange={(e) => {
                const po = OFFICIAL_PO_LIST.find(p => p.id === e.target.value);
                setFormData(prev => ({ ...prev, poId: e.target.value, poName: po?.name || '' }));
              }}
              required
            >
              <option value="">-- Pilih PO Bus Terdaftar --</option>
              {OFFICIAL_PO_LIST.map(po => (
                <option key={po.id} value={po.id}>{po.name}</option>
              ))}
            </select>
            {selectedPO && (
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider pl-1">
                Wilayah Layanan: {selectedPO.address}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Tanggal Inspeksi Diminta</label>
              <input 
                type="date" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.inspectionDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData(prev => ({ ...prev, inspectionDate: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Jumlah Armada</label>
              <input 
                type="number" 
                min="1"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.vehicleCount}
                onChange={(e) => setFormData(prev => ({ ...prev, vehicleCount: parseInt(e.target.value) }))}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Nomor Kendaraan (Plat Nomor)</label>
            <textarea 
              placeholder="Contoh: AB 1234 XY, AB 5678 CD..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-24"
              value={formData.vehiclePlates}
              onChange={(e) => setFormData(prev => ({ ...prev, vehiclePlates: e.target.value }))}
              required
            />
            <p className="text-[10px] text-slate-400">Pisahkan dengan tanda koma jika armada lebih dari satu.</p>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Kirim Permohonan
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-800">Riwayat Pengajuan & Feedback</h2>
          <span className="text-sm font-medium text-slate-500">Menampilkan {applications.length} riwayat terakhir</span>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400">Belum ada riwayat pengajuan rampcheck.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
                <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase rounded-bl-xl ${
                  app.status === ApplicationStatus.PENDING ? 'bg-amber-100 text-amber-700' :
                  app.status === ApplicationStatus.ACCEPTED ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {app.status}
                </div>
                
                <h3 className="font-bold text-slate-800 mb-2">{app.poName}</h3>
                
                <div className="space-y-2 text-sm text-slate-600 mb-6">
                  <div className="flex justify-between">
                    <span className="opacity-60">ID Permohonan:</span>
                    <span className="font-mono text-xs">{app.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Tgl Inspeksi:</span>
                    <span className="font-medium text-slate-800">{app.inspectionDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Jml Armada:</span>
                    <span className="font-medium text-slate-800">{app.vehicleCount} Unit</span>
                  </div>
                </div>

                <div className="flex gap-2">
                   <button 
                     onClick={() => window.print()}
                     className="flex-1 text-center py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-bold transition-all"
                   >
                     Download PDF
                   </button>
                   {app.status === ApplicationStatus.ACCEPTED && (
                     <div className="flex-1 text-center py-2 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold border border-emerald-100 flex items-center justify-center">
                        ✓ DISETUJUI
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-slate-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">📑</div>
              <div>
                <h4 className="font-bold text-slate-800">Template Surat Permohonan</h4>
                <p className="text-xs text-slate-500">Unduh template resmi sebagai pedoman naskah dinas.</p>
              </div>
           </div>
           <button className="bg-white border border-slate-200 px-6 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
             Download Template (.PDF)
           </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
