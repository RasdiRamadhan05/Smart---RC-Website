
import React from 'react';
import { RampcheckApplication, ApplicationStatus } from '../types';

interface AdminDashboardProps {
  applications: RampcheckApplication[];
  onUpdateStatus: (id: string, status: ApplicationStatus) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ applications, onUpdateStatus }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Dashboard Admin</h1>
          <p className="text-slate-500">Seksi Sarana - BPTD Kelas II DIY</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none px-6 py-3 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <span className="block text-xs font-bold text-blue-400 uppercase tracking-widest">Masuk</span>
            <span className="text-2xl font-black text-blue-800">{applications.length}</span>
          </div>
          <div className="flex-1 md:flex-none px-6 py-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
            <span className="block text-xs font-bold text-emerald-400 uppercase tracking-widest">Selesai</span>
            <span className="text-2xl font-black text-emerald-800">
              {applications.filter(a => a.status === ApplicationStatus.ACCEPTED).length}
            </span>
          </div>
        </div>
      </header>

      <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-lg text-slate-800">Antrian Permohonan</h2>
          <div className="flex gap-2">
             <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">Terbaru</button>
             <button className="px-3 py-1 text-slate-400 rounded-lg text-xs font-bold">Terlama</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">PO Bus / ID</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Rencana Inspeksi</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Unit</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400 italic">Belum ada data masuk.</td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{app.poName}</div>
                      <div className="text-[10px] font-mono text-slate-400">{app.id}</div>
                    </td>
                    <td className="p-4 text-sm font-medium text-slate-600">
                      {app.inspectionDate}
                    </td>
                    <td className="p-4 text-sm font-medium text-blue-600">
                      {app.vehicleCount} Armada
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        app.status === ApplicationStatus.PENDING ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                        app.status === ApplicationStatus.ACCEPTED ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-rose-100 text-rose-700 border border-rose-200'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {app.status === ApplicationStatus.PENDING && (
                          <>
                            <button 
                              onClick={() => onUpdateStatus(app.id, ApplicationStatus.ACCEPTED)}
                              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-all shadow-md"
                            >
                              Terima
                            </button>
                            <button 
                              onClick={() => onUpdateStatus(app.id, ApplicationStatus.REJECTED)}
                              className="px-4 py-2 bg-white border border-rose-200 text-rose-600 rounded-lg text-xs font-bold hover:bg-rose-50 transition-all"
                            >
                              Tolak
                            </button>
                          </>
                        )}
                        {app.status !== ApplicationStatus.PENDING && (
                          <button 
                             onClick={() => onUpdateStatus(app.id, ApplicationStatus.PENDING)}
                             className="text-slate-400 hover:text-slate-600 underline text-[10px] font-medium"
                          >
                            Reset Status
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl text-white">
          <h3 className="font-bold mb-2">Statistik Mingguan</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">Pengajuan meningkat 15% dari minggu lalu akibat persiapan Libur Sekolah.</p>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[75%] rounded-full"></div>
          </div>
        </div>
        <div className="bg-blue-600 p-6 rounded-3xl text-white">
          <h3 className="font-bold mb-2">Pusat Bantuan</h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-4">Hubungi support IT jika terdapat kendala sinkronisasi data PO.</p>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-xs font-bold transition-all">Hubungi IT</button>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-slate-800 mb-1">Export Data</h3>
          <p className="text-slate-500 text-xs mb-4">Ekspor laporan bulanan ke format Excel.</p>
          <button className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all">Export (.XLSX)</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
